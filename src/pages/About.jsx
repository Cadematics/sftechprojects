
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto flex flex-col gap-16 sm:gap-24">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-slate-900 dark:text-slate-50 text-4xl md:text-5xl font-black tracking-tighter">About SFTechProjects</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal max-w-3xl mx-auto">Innovating the Future of Engineering and Prototyping</p>
            </div>

            <section className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Our Mission & Vision</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed max-w-3xl mx-auto">SFTechProjects is a leading professional engineering services firm dedicated to pushing the boundaries of innovation. Our mission is to provide cutting-edge solutions in prototyping and digital fabrication, turning complex ideas into tangible realities. We are committed to excellence, precision, and collaborative partnerships to drive the future of technology.</p>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img alt="A modern engineering workshop with 3D printers and CNC machines in operation." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeQzyGdIwMGn2pMTLfbcrP3opJp7HqLbI62y3Hhb___clPIr6lbS52MFYdqGKQiCHrP-6NoqqSyATZ44b5o90tOyEXw1M9duDmMShzKUjLrHISCFi7iBfSSVncvNpV3VToYBvTife89zrNjGiSydmXOmyoss25X9tAtpDp1t1-KhTcAcPIeGIpHgqS0xIkGaneq3yU8DzIeQRrS2spPyPk3MUyJ8s0mbnD8rZr9rjMiK2mj1THBHZ5KqwuvKvbOL4kfmjess3elIM"/>
              </div>
            </section>

            <section className="flex flex-col gap-8">
              <div className="text-center">
                <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">The Journey So Far</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
                <p>Founded by a group of passionate engineers, SFTechProjects began with a simple goal: to make advanced manufacturing and prototyping accessible to innovators everywhere. From our humble beginnings in a small workshop, we've grown into a trusted partner for startups and established companies alike, consistently delivering high-quality results and pushing the envelope of what's possible.</p>
                <img alt="A close-up shot of a complex mechanical prototype assembly." className="rounded-xl w-1/3 float-right ml-6 mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPmJZXlyzUAPmrpKcmvuT6M6U38yRsSmm5CpYcNiDWWIXrsayHZLDIj89S_uXwwTI_J8WYFipSPJQtngAUjhlHVq0xXgHz593moRVpY6nnmb0ShP2uuwr5PkrCaaTOF0zd4McTZfwmuP6jq1kR8E06ubTi5ObC6ODgDNAt3ELNazTggdeQbgwm-Tb46UAV28AbmBCBbDa9THQwSlNJaOnKoWTxfx7-oyDcxaXTIIJC6fqU0GcgA6LKUw93-A9IXLf1grHzmmmgc0Q"/>
                <p>Our journey has been one of continuous learning and adaptation. We've embraced new technologies, from the latest in 3D printing to advanced CNC machining, always with the aim of providing more value to our clients. Each project is a new chapter in our story, a testament to the power of collaboration and the relentless pursuit of perfection. We believe that the best products are born from a blend of creative vision and engineering rigor, and that's the principle we bring to every challenge.</p>
                <p>Looking ahead, we are excited to continue exploring the frontiers of technology, helping to build a future where any idea, no matter how ambitious, can be brought to life.</p>
              </div>
            </section>

            <section className="flex flex-col gap-8 items-center">
              <div className="text-center">
                <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">What Drives Us</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mt-2">Our core values are the foundation of everything we do.</p>
              </div>
              <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">lightbulb</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Innovation</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">We constantly explore new technologies and methods to deliver creative and effective solutions.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">straighten</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Precision</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Meticulous attention to detail ensures the highest quality and accuracy in every project.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">groups</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Collaboration</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">We work closely with our clients as a true partner to achieve shared goals and success.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Customer Success</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Your success is our ultimate metric. We are committed to delivering results that matter.</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-8 items-center">
              <div className="text-center">
                <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Meet Our Experts</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mt-2">The brilliant minds behind our innovative solutions.</p>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-full overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                    <img alt="Headshot of Jane Doe, CEO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaPFrvpWVrHL3G3YYUcxXX5JN_2zszhXJMM2rV7cuVZQ9sCWHmw0GBK-Lg-PpbDqukQRMehG63xomTdUxMIEBjycq8tWDi6bPrh4h7cngL8VcL2Uc2e-k7LyLT8sSF_8R_5AeL01HTJcWjHfk4joQW7rOTGKxxkv3FCNOHo8tvm9p5nB0boCf6C5fzBtH-XTplDQ7guSGm5HgGTRUEENApDzEcajqf16apOvzDzVBVfNVPkY43qx8frXno9p18bQRNKxbsB0JQuBg"/>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Jane Doe</h3>
                  <p className="text-sm text-primary">Founder & CEO</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-full overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                    <img alt="Headshot of John Smith, Lead Engineer" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbf33W0d_ZpBp6mWgCVlPqJIOO9rys-pbyYF4uaVa05carYimIsJxUVhl9xImPDu3F_uQf-uxaHFoueEmida_O66oeLnCzY2XQfjZv3QF33McJ2sEem7a-j4EvVXOdL2mgCCU_1Ux8pgiHTe8G24YJeho_wK40odgkkwMyK7PcoIP2wNo-KRUW6nGWxgCFpFRqhUrgx-xsGUzx4G1BnDaEH3P85hdExTduqvrfnxps4bb5FrhrHBcjrQulAa8EpovzJApHkqsf4A"/>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">John Smith</h3>
                  <p className="text-sm text-primary">Lead Engineer</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-full overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                    <img alt="Headshot of Emily Johnson, Project Manager" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiTyOTed1jk1xarCH4H-FP2beCLkuWk5DFtNhwlj9e3msa6AgOXDyJrMN12j-7F1BP_vyK4VklO0mArJQqpi5tStBFsphJImGm0R7NLjcYeJKtBUnV1JiCPJraxhuCfvmbbo0YUv-VpY71gqyd2a8GAX5a7r73ZB4sF3DiL4QX_kAdTBMIuypJRbe2b_58nmIi_zBYjCokq1sWKTj8lINdxFyM3wmrn_qo_UfBD1CX2oUZVXqCNh4DkMcalmWdaXEO51EEtHwfYDU"/>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Emily Johnson</h3>
                  <p className="text-sm text-primary">Head of Projects</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                  <Link to="/careers" className="flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                    <div className="flex items-center justify-center size-12 rounded-full bg-slate-200 dark:bg-slate-800 mb-4">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                    <span className="font-bold text-center">View Full Team</span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-8">
              <div className="text-center">
                <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Our Workshop in Action</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mt-2">A glimpse into where the magic happens.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img alt="Wide shot of the engineering workshop." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeQzyGdIwMGn2pMTLfbcrP3opJp7HqLbI62y3Hhb___clPIr6lbS52MFYdqGKQiCHrP-6NoqqSyATZ44b5o90tOyEXw1M9duDmMShzKUjLrHISCFi7iBfSSVncvNpV3VToYBvTife89zrNjGiSydmXOmyoss25X9tAtpDp1t1-KhTcAcPIeGIpHgqS0xIkGaneq3yU8DzIeQRrS2spPyPk3MUyJ8s0mbnD8rZr9rjMiK2mj1THBHZ5KqwuvKvbOL4kfmjess3elIM"/>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img alt="Detailed view of a CNC machine cutting metal." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPmJZXlyzUAPmrpKcmvuT6M6U38yRsSmm5CpYcNiDWWIXrsayHZLDIj89S_uXwwTI_J8WYFipSPJQtngAUjhlHVq0xXgHz593moRVpY6nnmb0ShP2uuwr5PkrCaaTOF0zd4McTZfwmuP6jq1kR8E06ubTi5ObC6ODgDNAt3ELNazTggdeQbgwm-Tb46UAV28AbmBCBbDa9THQwSlNJaOnKoWTxfx7-oyDcxaXTIIJC6fqU0GcgA6LKUw93-A9IXLf1grHzmmmgc0Q"/>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img alt="Team members collaborating around a whiteboard." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbf33W0d_ZpBp6mWgCVlPqJIOO9rys-pbyYF4uaVa05carYimIsJxUVhl9xImPDu3F_uQf-uxaHFoueEmida_O66oeLnCzY2XQfjZv3QF33McJ2sEem7a-j4EvVXOdL2mgCCU_1Ux8pgiHTe8G24YJeho_wK40odgkkwMyK7PcoIP2wNo-KRUW6nGWxgCFpFRqhUrgx-xsGUzx4G1BnDaEH3P85hdExTduqvrfnxps4bb5FrhrHBcjrQulAa8EpovzJApHkqsf4A"/>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img alt="Close-up of a 3D printed prototype." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaPFrvpWVrHL3G3YYUcxXX5JN_2zszhXJMM2rV7cuVZQ9sCWHmw0GBK-Lg-PpbDqukQRMehG63xomTdUxMIEBjycq8tWDi6bPrh4h7cngL8VcL2Uc2e-k7LyLT8sSF_8R_5AeL01HTJcWjHfk4joQW7rOTGKxxkv3FCNOHo8tvm9p5nB0boCf6C5fzBtH-XTplDQ7guSGm5HgGTRUEENApDzEcajqf16apOvzDzVBVfNVPkY43qx8frXno9p18bQRNKxbsB0JQuBg"/>
                </div>
              </div>
            </section>

          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-50 tracking-tight">Ready to Build Something Great?</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Let's turn your vision into reality. Explore our services or get in touch for a custom quote.</p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link to="/services" className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors">
                            <span className="truncate">Explore Services</span>
                        </Link>
                        <Link to="/quote" className="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-base font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                            <span className="truncate">Request a Quote</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default About;
