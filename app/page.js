<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Incorvia - Homepage Preview</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lora:wght@600;700&display=swap" rel="stylesheet">
    <style>
        /* Custom Tailwind CSS Configuration */
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brand-blue': '#0A2342',
                        'brand-navy': '#031424',
                        'brand-accent': '#C0A062', // A sophisticated gold
                        'brand-light-bg': '#F7F9FB',
                        'brand-text-dark': '#1D242B',
                        'brand-text-light': '#5A6470',
                    },
                    fontFamily: {
                        'sans': ['Inter', 'sans-serif'],
                        'serif': ['Lora', 'serif'],
                    },
                },
            },
        };

        /* Smooth scrolling for anchor links */
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="font-sans">

    <!-- HEADER / NAVBAR -->
    <header class="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="flex items-center space-x-3">
                <img src="https://placehold.co/160x50/0A2342/FFFFFF?text=INCORVIA" alt="Incorvia Logo" class="h-8 w-auto">
            </a>
            <nav class="hidden md:flex items-center space-x-8">
                <a href="#" class="font-medium transition-colors duration-300 text-brand-blue font-semibold">Home</a>
                <a href="#" class="font-medium transition-colors duration-300 text-brand-text-light hover:text-brand-blue">About Us</a>
                <a href="#services" class="font-medium transition-colors duration-300 text-brand-text-light hover:text-brand-blue">Our Services</a>
                <a href="#" class="font-medium transition-colors duration-300 text-brand-text-light hover:text-brand-blue">Contact</a>
            </nav>
            <a href="#" class="hidden md:inline-block bg-brand-accent text-white px-6 py-2.5 rounded-md font-semibold hover:opacity-90 transition duration-300">
                Request Consultation
            </a>
            <button class="md:hidden text-brand-blue focus:outline-none" aria-label="Toggle menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </header>

    <main>
        <!-- HERO SECTION -->
        <!--  -->
        <section class="relative bg-brand-blue text-white py-24 md:py-32">
            <div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop');"></div>
            <div class="container mx-auto px-6 text-center relative z-10">
                <h1 class="text-4xl md:text-6xl font-serif font-semibold mb-6 leading-tight max-w-4xl mx-auto">
                    Strategic Corporate & Legal Expertise in Costa Rica
                </h1>
                <p class="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                    Your trusted partner for seamless incorporation, compliance, and strategic business advisory.
                </p>
                <a href="#services" class="inline-block bg-brand-accent text-white px-10 py-4 rounded-md font-semibold hover:opacity-90 transition duration-300 text-lg">
                    Explore Our Services
                </a>
            </div>
        </section>

        <!-- SOCIAL PROOF SECTION -->
        <section class="py-12 bg-brand-light-bg">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
                    <p class="text-center md:text-left text-sm font-semibold text-brand-text-light uppercase tracking-wider">Trusted By Global Leaders:</p>
                    <img src="https://placehold.co/150x50/cccccc/999999?text=FORBES" alt="Forbes Logo" class="mx-auto opacity-60">
                    <img src="https://placehold.co/150x50/cccccc/999999?text=BLOOMBERG" alt="Bloomberg Logo" class="mx-auto opacity-60">
                    <img src="https://placehold.co/150x50/cccccc/999999?text=TECHCRUNCH" alt="TechCrunch Logo" class="mx-auto opacity-60">
                    <img src="https://placehold.co/150x50/cccccc/999999?text=WIRED" alt="Wired Logo" class="mx-auto opacity-60 hidden lg:block">
                </div>
            </div>
        </section>

        <!-- SERVICES SECTION -->
        <section id="services" class="py-20 md:py-28 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl md:text-4xl font-serif font-semibold text-brand-blue">Our Core Practice Areas</h2>
                    <p class="text-lg text-brand-text-light mt-4">We provide a comprehensive suite of services designed to ensure your success in the Costa Rican market.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-brand-light-bg p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-xl font-semibold text-brand-blue mb-3">Corporate Structuring</h3>
                        <p class="text-brand-text-light mb-6">Expert S.A. & S.R.L. formation for optimal liability protection and tax efficiency.</p>
                        <a href="#" class="font-semibold text-brand-accent hover:underline">Learn More &rarr;</a>
                    </div>
                    <div class="bg-brand-light-bg p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-xl font-semibold text-brand-blue mb-3">Compliance & Tax</h3>
                        <p class="text-brand-text-light mb-6">Navigate fiscal obligations and corporate governance with our expert advisory services.</p>
                        <a href="#" class="font-semibold text-brand-accent hover:underline">Learn More &rarr;</a>
                    </div>
                    <div class="bg-brand-light-bg p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-xl font-semibold text-brand-blue mb-3">Immigration & Residency</h3>
                        <p class="text-brand-text-light mb-6">Seamless support for securing residency, work permits, and visas for you and your team.</p>
                        <a href="#" class="font-semibold text-brand-accent hover:underline">Learn More &rarr;</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- WHY CHOOSE US SECTION -->
        <section class="py-20 md:py-28 bg-brand-light-bg">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-brand-blue mb-6">A Foundation of Trust and Unparalleled Expertise</h2>
                        <p class="text-lg text-brand-text-light mb-8 leading-relaxed">
                            At Incorvia, we are more than just service providers; we are your strategic partners. We are committed to navigating the complexities of the Costa Rican legal system on your behalf, allowing you to focus on growing your business with confidence.
                        </p>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-brand-accent flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-brand-text-dark"><strong>Proven Track Record:</strong> Decades of combined experience in corporate law.</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-brand-accent flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-brand-text-dark"><strong>Client-Centric Approach:</strong> Tailored solutions that align with your specific business objectives.</span>
                            </li>
                             <li class="flex items-start">
                                <svg class="w-6 h-6 text-brand-accent flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-brand-text-dark"><strong>Unwavering Integrity:</strong> Upholding the highest standards of professionalism and transparency.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Incorvia Professional Team" class="rounded-lg shadow-xl w-full h-auto">
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA SECTION -->
        <section class="bg-brand-blue">
            <div class="container mx-auto px-6 py-20 text-center">
                <h2 class="text-3xl font-serif font-semibold text-white mb-4">Ready to Establish Your Presence?</h2>
                <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Our team is ready to provide the expert guidance you need. Schedule a complimentary, no-obligation consultation to discuss your specific objectives.
                </p>
                <a href="#" class="inline-block bg-brand-accent text-white px-10 py-4 rounded-md font-semibold hover:opacity-90 transition duration-300 text-lg">
                    Book a Free Consultation
                </a>
            </div>
        </section>
    </main>

    <!-- FOOTER -->
    <footer class="bg-brand-navy text-white">
        <div class="container mx-auto px-6 py-12">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Incorvia</h3>
                    <p class="text-gray-400 text-sm">Strategic Corporate & Legal Expertise in Costa Rica.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Navigate</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="text-gray-300 hover:text-white transition">About Us</a></li>
                        <li><a href="#services" class="text-gray-300 hover:text-white transition">Our Services</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact</h3>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li><a href="mailto:sales@incorvia.net" class="hover:text-white">sales@incorvia.net</a></li>
                        <li>San José, Costa Rica</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Connect</h3>
                    <div class="flex space-x-4">
                        <a href="https://www.linkedin.com/in/incorvia-ltd-3aa098384/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white" aria-label="LinkedIn">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://x.com/incorviacr?s=11" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white" aria-label="Twitter">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                <p>&copy; 2024 Incorvia. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>