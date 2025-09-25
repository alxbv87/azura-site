<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Incorvia | Professional Homepage Preview</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <style>
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #101D35; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 4px; }

        body { background-color: #101D35; color: #EAEAEA; }
        
        #hero-canvas-container { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; }

        .card { background: linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease; transform-style: preserve-3d; }
        .card:hover { border-color: rgba(212, 175, 55, 0.5); transform: perspective(1000px) scale3d(1.05, 1.05, 1.05); background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)); }
        
        .process-timeline::before { content: ''; position: absolute; left: 1rem; top: 0; bottom: 0; width: 2px; background-color: rgba(212, 175, 55, 0.2); }
        .process-item-dot { position: absolute; left: 0; top: 0.5rem; transform: translateX(-50%); width: 2rem; height: 2rem; background-color: #101D35; border: 2px solid #D4AF37; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #D4AF37; }
        
        .team-name-item { cursor: pointer; transition: all 0.3s ease; }
        .team-name-item.active { background-color: rgba(212, 175, 55, 0.1); border-color: #D4AF37; color: #FFFFFF; }
        .team-details-content { transition: opacity 0.5s ease, transform 0.5s ease; }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: { 'brand-dark': '#101D35', 'brand-accent': '#D4AF37', 'brand-light': '#F0F0F0', 'brand-muted': '#A9B4C7', 'brand-border': 'rgba(255, 255, 255, 0.15)', },
                    fontFamily: { 'sans': ['Lato', 'sans-serif'], 'display': ['Playfair Display', 'serif'], },
                }
            }
        }
    </script>
</head>
<body class="font-sans">
    <header class="sticky top-0 z-50 py-4 px-6 md:px-10 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#home" class="text-2xl font-bold font-display text-brand-light">INCORVIA</a>
            <nav class="hidden md:flex items-center space-x-8">
                <a href="#about" class="font-medium text-brand-muted hover:text-brand-light transition-colors">Our Company</a>
                <a href="#services" class="font-medium text-brand-muted hover:text-brand-light transition-colors">Services</a>
                <a href="#process" class="font-medium text-brand-muted hover:text-brand-light transition-colors">Process</a>
                <a href="#team" class="font-medium text-brand-muted hover:text-brand-light transition-colors">Our Team</a>
            </nav>
            <a href="#contact" class="hidden md:inline-block bg-brand-accent text-brand-dark px-6 py-2.5 rounded-md font-bold text-sm hover:bg-opacity-90 transition duration-300">Schedule Consultation</a>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="home" class="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div id="hero-canvas-container"></div>
            <div class="relative z-10 p-6">
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-brand-light leading-tight">Seamless Business Incorporation<br>in Costa Rica.</h1>
                <p class="mt-6 text-lg md:text-xl text-brand-light max-w-3xl mx-auto">Your strategic partners for navigating the complexities of company formation and achieving ambitious growth in Costa Rica.</p>
            </div>
        </section>
        
        <!-- About Section -->
        <section id="about" class="py-20 md:py-32">
            <div class="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div>
                    <p class="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">Our Company</p>
                    <h2 class="text-4xl md:text-5xl font-bold font-display text-brand-light mb-6">Local Expertise, Global Vision</h2>
                    <p class="text-lg text-brand-muted leading-relaxed mb-8">Incorvia is a premier incorporation services company based in San José, dedicated to providing sophisticated solutions for international businesses and investors. We combine our deep-rooted understanding of Costa Rican corporate regulations with a global perspective, offering a strategic advantage to clients looking to establish, operate, and thrive in this dynamic country. Our proactive approach ensures you are always ahead of regulatory changes and positioned for long-term success.</p>
                </div>
                 <div class="relative h-full min-h-[500px]">
                    <img src="https://images.unsplash.com/photo-1533167523448-420684094212?q=80&w=2070&auto=format&fit=crop" class="rounded-lg shadow-2xl object-cover h-full w-full" alt="Beautiful Costa Rican beach representing a prime location for business">
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="py-20 md:py-32 bg-black/20">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold font-display text-brand-light">Our Core Services</h2>
                    <p class="mt-4 text-lg text-brand-muted">A comprehensive suite of services for establishing and managing your business in Costa Rica.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="service-card card p-8 rounded-lg"><h3 class="text-2xl font-semibold font-display text-brand-light mb-3">Company Formation (S.A. & S.R.L.)</h3><p class="text-brand-muted">Seamless incorporation of Costa Rican entities, tailored for liability protection and tax efficiency.</p></div>
                    <div class="service-card card p-8 rounded-lg"><h3 class="text-2xl font-semibold font-display text-brand-light mb-3">Regulatory & Tax Compliance</h3><p class="text-brand-muted">Ensuring your business adheres to all national regulations, including annual filings and tax obligations.</p></div>
                    <div class="service-card card p-8 rounded-lg"><h3 class="text-2xl font-semibold font-display text-brand-light mb-3">Residency & Work Permits</h3><p class="text-brand-muted">Expert guidance for executives and investors seeking legal residency and work authorization.</p></div>
                </div>
            </div>
        </section>
        
        <!-- Process Section -->
        <section id="process" class="py-20 md:py-32">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto mb-20">
                    <h2 class="text-4xl md:text-5xl font-bold font-display text-brand-light">Our Streamlined Process</h2>
                    <p class="mt-4 text-lg text-brand-muted">A structured and transparent approach to ensure your objectives are met with precision and efficiency at every stage.</p>
                </div>
                <div class="relative process-timeline max-w-3xl mx-auto">
                    <div class="relative pl-12 pb-16">
                        <div class="process-item-dot">1</div>
                        <h3 class="text-2xl font-bold font-display text-brand-light">Initial Consultation</h3>
                        <p class="mt-2 text-brand-muted">We begin with a confidential discussion to understand your unique situation and business goals in Costa Rica.</p>
                    </div>
                    <div class="relative pl-12 pb-16">
                        <div class="process-item-dot">2</div>
                        <h3 class="text-2xl font-bold font-display text-brand-light">Strategic Plan</h3>
                        <p class="mt-2 text-brand-muted">Our team develops a bespoke incorporation strategy, outlining a clear roadmap and a transparent fee structure.</p>
                    </div>
                    <div class="relative pl-12 pb-16">
                        <div class="process-item-dot">3</div>
                        <h3 class="text-2xl font-bold font-display text-brand-light">Execution & Filing</h3>
                        <p class="mt-2 text-brand-muted">We meticulously handle all necessary filings and interactions with Costa Rican government agencies on your behalf.</p>
                    </div>
                    <div class="relative pl-12">
                        <div class="process-item-dot">4</div>
                        <h3 class="text-2xl font-bold font-display text-brand-light">Ongoing Compliance</h3>
                        <p class="mt-2 text-brand-muted">Beyond formation, we provide continuous support to ensure your business remains in good standing with all local regulations.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section id="team" class="py-20 md:py-32 bg-black/20">
            <div class="container mx-auto px-6">
                 <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold font-display text-brand-light">Meet Our Leadership</h2>
                    <p class="mt-4 text-lg text-brand-muted">A collective of seasoned experts dedicated to your success in Costa Rica.</p>
                </div>
                <div class="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div class="md:col-span-1">
                        <ul id="team-list" class="space-y-2">
                            <!-- Team member list will be populated by JS -->
                        </ul>
                    </div>
                    <div class="md:col-span-2">
                        <div id="team-details" class="team-details-content">
                             <!-- Team member details will be populated by JS -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section id="contact" class="py-28 text-center">
             <h2 class="text-4xl md:text-6xl font-bold font-display text-brand-light">Begin Your Costa Rican Venture</h2>
             <p class="text-lg text-brand-muted max-w-2xl mx-auto my-8">Contact us to schedule a confidential consultation and discover how our strategic guidance can empower your business's success.</p>
             <a href="#" class="inline-block bg-brand-accent text-brand-dark px-10 py-4 rounded-md font-bold hover:bg-opacity-90 transition duration-300 text-lg">Let's Talk</a>
        </section>

    </main>
     <footer class="border-t border-brand-border mt-20">
         <div class="container mx-auto px-6 py-16">
            <div class="grid md:grid-cols-4 gap-8">
                <div class="md:col-span-2"><a href="#" class="text-2xl font-bold font-display text-brand-light">INCORVIA</a><p class="mt-4 text-brand-muted max-w-sm">Your partners for business success in Costa Rica.</p></div>
                 <div><h3 class="text-lg font-bold text-brand-light mb-4">Navigate</h3><ul class="space-y-3"><li><a href="#about" class="text-brand-muted hover:text-brand-light">About Us</a></li><li><a href="#services" class="text-brand-muted hover:text-brand-light">Services</a></li><li><a href="#team" class="text-brand-muted hover:text-brand-light">Our Team</a></li><li><a href="#contact" class="text-brand-muted hover:text-brand-light">Contact</a></li></ul></div>
                 <div><h3 class="text-lg font-bold text-brand-light mb-4">Contact</h3><ul class="space-y-3 text-brand-muted"><li>Avenida Escazú, San José, Costa Rica</li><li>+506 2208-8888</li><li>contact@incorvia.cr</li></ul></div>
            </div>
             <div class="mt-16 border-t border-brand-border pt-8 text-center text-sm text-brand-muted"><p>&copy; 2025 Incorvia. All Rights Reserved.</p></div>
        </div>
    </footer>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('hero-canvas-container');
            if (container && typeof THREE !== 'undefined') {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setSize(container.clientWidth, container.clientHeight);
                container.appendChild(renderer.domElement);
                const geometry = new THREE.SphereGeometry(2.2, 32, 32);
                const material = new THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: true });
                const sphere = new THREE.Mesh(geometry, material);
                scene.add(sphere);
                const particlesGeometry = new THREE.BufferGeometry;
                const particlesCnt = 5000;
                const posArray = new Float32Array(particlesCnt * 3);
                for(let i=0; i < particlesCnt * 3; i++) { posArray[i] = (Math.random() - 0.5) * 10; }
                particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
                const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0xD4AF37 });
                const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
                scene.add(particlesMesh)
                camera.position.z = 5;
                let mouseX = 0, mouseY = 0;
                document.addEventListener('mousemove', (event) => { mouseX = (event.clientX / window.innerWidth) * 2 - 1; mouseY = -(event.clientY / window.innerHeight) * 2 + 1; });
                function animate() {
                    requestAnimationFrame(animate);
                    sphere.rotation.y += 0.0005; particlesMesh.rotation.y += 0.0002;
                    camera.position.x += (mouseX * 0.5 - camera.position.x) * .05; camera.position.y += (mouseY * 0.5 - camera.position.y) * .05;
                    camera.lookAt(scene.position); renderer.render(scene, camera);
                }
                animate();
                window.addEventListener('resize', () => { camera.aspect = container.clientWidth / container.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(container.clientWidth, container.clientHeight); });
            }

            // Team Section Logic
            const teamData = [
                {
                    name: "Johnathan Hayes",
                    title: "Managing Director",
                    bio: "With over two decades of experience in international business and corporate structuring, Johnathan provides strategic leadership to the company and its clients. His guidance is sought by multinational corporations and investors entering the Costa Rican market.",
                    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
                },
                {
                    name: "Samantha Carter",
                    title: "Head of Corporate Services",
                    bio: "Samantha is a leading authority on entity structuring for foreign-owned companies in Costa Rica. She guides clients through every step of the incorporation process, from initial filing to ongoing compliance.",
                    img: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    name: "Michael Chen",
                    title: "Lead, Real Estate & FTZ",
                    bio: "Michael's expertise lies in navigating the complexities of Costa Rican real estate transactions and advising clients on leveraging the benefits of the country's Free Trade Zone (FTZ) regime.",
                    img: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop"
                },
                {
                    name: "Eleanor Vance",
                    title: "Senior Compliance Specialist",
                    bio: "Eleanor is adept at navigating the ever-evolving Costa Rican regulatory landscape. She ensures clients maintain perfect compliance, mitigating risk and ensuring operational integrity.",
                    img: "https://images.unsplash.com/photo-1627541593348-41098675b399?q=80&w=1887&auto=format&fit=crop"
                }
            ];

            const teamListEl = document.getElementById('team-list');
            const teamDetailsEl = document.getElementById('team-details');

            function displayTeamMember(index) {
                const member = teamData[index];
                
                teamDetailsEl.classList.remove('opacity-0', 'translate-y-5'); // Make it visible for animation
                teamDetailsEl.classList.add('opacity-0', 'translate-y-5');


                setTimeout(() => {
                    teamDetailsEl.innerHTML = `
                        <img src="${member.img}" class="w-full h-96 object-cover rounded-lg mb-6" alt="${member.name}">
                        <h3 class="text-3xl font-bold font-display text-brand-light">${member.name}</h3>
                        <p class="text-xl text-brand-accent mt-1">${member.title}</p>
                        <p class="text-brand-muted mt-4 leading-relaxed">${member.bio}</p>
                    `;
                    teamDetailsEl.classList.remove('opacity-0', 'translate-y-5');
                }, 200);

                document.querySelectorAll('.team-name-item').forEach((item, i) => {
                    if (i === index) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }

            teamData.forEach((member, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="team-name-item p-6 border-l-4 border-transparent text-brand-muted hover:text-brand-light">
                        <h4 class="text-2xl font-bold">${member.name}</h4>
                        <p class="text-brand-muted">${member.title}</p>
                    </div>
                `;
                li.addEventListener('click', () => displayTeamMember(index));
                teamListEl.appendChild(li);
            });

            // Initial display
            if (teamData.length > 0) {
                 setTimeout(() => {
                    displayTeamMember(0);
                 }, 100); // Small delay to ensure styles are applied
            }
        });
    </script>
</body>
</html>

