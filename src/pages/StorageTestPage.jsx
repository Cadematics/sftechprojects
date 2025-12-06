import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../firebase';

const StorageTestPage = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);

  const log = (message) => {
    console.log(message);
    setLogs(prevLogs => [...prevLogs, `[${new Date().toLocaleTimeString()}] ${message}`]);
  }

  const testFolderRef = ref(storage, "/");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const listFiles = async () => {
    log("Listing files…");
    setError(null);
    let res;
    try {
      log("Fetching file list…");
      res = await listAll(testFolderRef);
      log(`File count: ${res.items.length}`);
    } catch (err) {
      log(`LIST ERROR: ${err.message}`);
      setError('Failed to list files. Check console for details.');
      return;
    }

    const files = await Promise.all(
      res.items.map(async (itemRef) => {
        try {
          const url = await getDownloadURL(itemRef);
          log(`File: ${itemRef.name}, URL: ${url}`);
          return { name: itemRef.name, url };
        } catch (err) {
          log(`URL ERROR: ${err.message}`);
          return { name: itemRef.name, url: null, error: err.message };
        }
      })
    );
    setUploadedFiles(files);
  };

  const handleUpload = async () => {
    log("Upload button clicked…");
    if (!file) {
      const errorMessage = "No file selected.";
      log(`ERROR: ${errorMessage}`);
      setError('Please select a file to upload.');
      return;
    }
    setUploading(true);
    setError(null);
    
    let listBeforeUpload;
    try {
        listBeforeUpload = await listAll(testFolderRef);
    } catch (e) {
        listBeforeUpload = { items: [] };
    }

    try {
      const storageRef = ref(testFolderRef, file.name);
      log(`Uploading file: ${file.name}`);
      await uploadBytes(storageRef, file);
      log("Upload complete.");
      if(listBeforeUpload.items.length === 0){
        log("Folder initialized.");
      }
      await listFiles();
    } catch (err) {
      log(`UPLOAD ERROR: ${err.message}`);
      setError('Failed to upload file. Check console for details.');
    }
    setUploading(false);
    setFile(null); 
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
        fileInput.value = '';
    }
  };

  useEffect(() => {
    log("Initializing StorageTestPage…");
    listFiles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Firebase Storage Debug Page</h1>
        <p className="text-lg text-gray-600">
          Upload a file and view all existing files in the bucket folder.
        </p>
      </header>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </div>
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
        >
          {uploading ? 'Uploading...' : 'Upload File to Storage'}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <section className="mt-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Uploaded Files</h2>
        <button
            onClick={listFiles}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-4"
        >
            Refresh File List
        </button>
        <ul className="list-disc pl-5 space-y-2">
          {uploadedFiles.length > 0 ? (
            uploadedFiles.map((file, index) => (
              <li key={index}>
                <span>{file.name}</span>
                {file.url ? (
                   <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline ml-2"
                  >
                    Download
                  </a>
                ) : (
                  <span className="text-red-500 ml-2">- URL Error</span>
                )}
              </li>
            ))
          ) : (
            <p>No files found in this directory.</p>
          )}
        </ul>
      </section>

      <div className="mt-8 max-w-xl mx-auto bg-gray-100 p-4 rounded-lg shadow-inner h-64 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-2">Debug Log</h3>
        <div className="text-sm font-mono whitespace-pre-wrap">
          {logs.join('\n')}
        </div>
      </div>
    </div>
  );
};

export default StorageTestPage;
