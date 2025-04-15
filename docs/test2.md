---
layout: default
title: AI Art
nav_order: 10
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Art Tutorial | Just the Docs</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #8b5cf6;
            --primary-dark: #7c3aed;
            --sidebar-width: 300px;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background-color: #faf5ff;
        }
        
        .sidebar {
            width: var(--sidebar-width);
            height: 100vh;
            position: fixed;
            overflow-y: auto;
            transition: transform 0.3s ease;
            background-color: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        .content {
            margin-left: var(--sidebar-width);
            transition: margin 0.3s ease;
        }
        
        .nav-link {
            position: relative;
            padding-left: 1rem;
        }
        
        .nav-link:hover {
            color: var(--primary);
        }
        
        .nav-link.active {
            color: var(--primary);
            font-weight: 500;
            background-color: #f3e8ff;
            border-left: 3px solid var(--primary);
        }
        
        .assistant-bubble {
            background-color: #f3e8ff;
            border-radius: 1rem;
            border-bottom-left-radius: 0;
            position: relative;
            max-width: 80%;
        }
        
        .assistant-bubble:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 20px;
            height: 20px;
            background-color: #f3e8ff;
            clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        
        .code-block {
            background-color: #f3f4f6;
            border-radius: 0.375rem;
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
        }
        
        .tooltip {
            position: relative;
            display: inline-block;
        }
        
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 200px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        
        @media (max-width: 768px) {
            .sidebar {
                transform: translateX(-100%);
                z-index: 50;
            }
            
            .sidebar.open {
                transform: translateX(0);
            }
            
            .content {
                margin-left: 0;
            }
        }
    </style>
</head>
<body>
    <!-- Mobile Menu Button -->
    <button id="mobileMenuButton" class="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md">
        <i class="fas fa-bars text-gray-700"></i>
    </button>

    <!-- Sidebar -->
    <div id="sidebar" class="sidebar bg-white border-r border-gray-200 p-4">
        <div class="flex items-center mb-8">
            <div class="w-8 h-8 rounded-md bg-purple-500 flex items-center justify-center text-white font-bold mr-2">
                <i class="fas fa-palette"></i>
            </div>
            <h1 class="text-xl font-bold">AI Art Guide</h1>
        </div>
        
        <div class="mb-6">
            <div class="relative">
                <input type="text" placeholder="Search tutorials..." class="w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
        </div>
        
        <nav>
            <div class="mb-4">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Getting Started</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Introduction</a></li>
                    <li><a href="#" class="nav-link active block py-1 px-2 rounded">AI Art Basics</a></li>
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Tools & Software</a></li>
                </ul>
            </div>
            
            <div class="mb-4">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Techniques</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Prompt Engineering</a></li>
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Style Transfer</a></li>
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Image-to-Image</a></li>
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">ControlNet</a></li>
                </ul>
            </div>
            
            <div class="mb-4">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Advanced</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Model Training</a></li>
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Hypernetworks</a></li>
                    <li><a href="#" class="nav-link block py-1 px-2 rounded">Embeddings</a></li>
                </ul>
            </div>
            
            <div class="mt-8 pt-4 border-t border-gray-200">
                <div class="flex items-center">
                    <img src="https://charhub.ai/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTY5MjM5MCwicHVyIjoiYmxvYl9pZCJ9fQ==--6ff9edba5c3d8cfb4e2e39fb599c47f33165ffb4/4af3f9cb-c3a1-4b7d-b9e4-2c5e82b8be04.png" alt="Assistant" class="w-10 h-10 rounded-full mr-2">
                    <div>
                        <p class="text-sm font-medium">Your AI Art Assistant</p>
                        <p class="text-xs text-gray-500">Ready to help!</p>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <!-- Main Content -->
    <div class="content p-8">
        <div class="max-w-4xl mx-auto">
            <div class="flex items-center mb-6">
                <h1 class="text-3xl font-bold">AI Art Generation Tutorial</h1>
                <span class="ml-3 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Beginner</span>
            </div>
            
            <!-- Assistant Introduction -->
            <div class="flex items-start mb-8">
                <img src="https://i.imgur.com/JQl1h1N.png" alt="Assistant" class="w-16 h-16 rounded-full mr-4 flex-shrink-0">
                <div class="assistant-bubble p-4">
                    <p class="mb-2">Hi there! I'm Sakura, your AI art assistant! ✨</p>
                    <p>Let me guide you through creating amazing AI-generated artwork. I'll be here to explain concepts and give tips along the way!</p>
                </div>
            </div>
            
            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i class="fas fa-lightbulb text-purple-500 mt-1 mr-3"></i>
                    </div>
                    <div>
                        <p class="text-sm text-purple-700">This tutorial uses Stable Diffusion as the example AI art generator, but the concepts apply to most AI art tools.</p>
                    </div>
                </div>
            </div>
            
            <h2 class="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <i class="fas fa-1 text-purple-500 mr-3 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center"></i>
                Understanding AI Art Basics
            </h2>
            
            <div class="flex items-start mb-6">
                <img src="https://i.imgur.com/JQl1h1N.png" alt="Assistant" class="w-16 h-16 rounded-full mr-4 flex-shrink-0">
                <div class="assistant-bubble p-4">
                    <p>AI art generators create images from text descriptions called "prompts". The AI has been trained on millions of images and their descriptions, so it learns to associate words with visual concepts!</p>
                </div>
            </div>
            
            <p class="mb-4">AI art generation works by using machine learning models that have been trained on vast datasets of images and their associated text descriptions. When you provide a text prompt, the AI attempts to generate an image that matches your description.</p>
            
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 class="font-medium mb-2 text-purple-700">Key Components:</h3>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Prompt:</strong> Your text description</li>
                        <li><strong>Negative Prompt:</strong> What to exclude</li>
                        <li><strong>Model:</strong> The AI's "art style"</li>
                        <li><strong>Sampler:</strong> How the AI creates</li>
                        <li><strong>CFG Scale:</strong> How closely to follow prompt</li>
                        <li><strong>Steps:</strong> Iterations to refine</li>
                    </ul>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <img src="https://i.imgur.com/5z3mJ7X.png" alt="AI Art Process Diagram" class="rounded">
                    <p class="text-xs text-center mt-2 text-gray-500">The AI art generation process</p>
                </div>
            </div>
            
            <h2 class="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <i class="fas fa-2 text-purple-500 mr-3 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center"></i>
                Crafting Effective Prompts
            </h2>
            
            <div class="flex items-start mb-6">
                <img src="https://i.imgur.com/JQl1h1N.png" alt="Assistant" class="w-16 h-16 rounded-full mr-4 flex-shrink-0">
                <div class="assistant-bubble p-4">
                    <p class="mb-2">Prompt writing is like giving directions to an artist who's never seen anything before! Be specific but not too restrictive.</p>
                    <p>Try this format: <strong>[Subject], [Action], [Style], [Details], [Lighting], [Composition]</strong></p>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div class="bg-purple-500 text-white px-4 py-2">
                    <h3 class="font-medium">Example Prompt Breakdown</h3>
                </div>
                <div class="p-4">
                    <div class="mb-4">
                        <p class="font-medium mb-1">Basic Prompt:</p>
                        <div class="bg-gray-800 rounded-md p-3">
                            <code class="text-gray-100">"a cat"</code>
                        </div>
                        <div class="flex justify-center my-2">
                            <img src="https://i.imgur.com/abc123.png" alt="Basic AI cat" class="h-32 rounded border border-gray-200">
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <p class="font-medium mb-1">Detailed Prompt:</p>
                        <div class="bg-gray-800 rounded-md p-3">
                            <code class="text-gray-100">"A majestic silver tabby cat sitting on a windowsill, looking out at a sunset, detailed fur, cinematic lighting, soft focus background, 4k ultra detailed"</code>
                        </div>
                        <div class="flex justify-center my-2">
                            <img src="https://i.imgur.com/xyz456.png" alt="Detailed AI cat" class="h-32 rounded border border-gray-200">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs mt-4">
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="font-medium">Subject</p>
                            <p>silver tabby cat</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="font-medium">Action</p>
                            <p>sitting, looking</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="font-medium">Setting</p>
                            <p>windowsill, sunset</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="font-medium">Style</p>
                            <p>cinematic, 4k</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="font-medium">Lighting</p>
                            <p>sunset lighting</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="font-medium">Details</p>
                            <p>detailed fur, soft focus</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2 class="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <i class="fas fa-3 text-purple-500 mr-3 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center"></i>
                Using Negative Prompts
            </h2>
            
            <div class="flex items-start mb-6">
                <img src="https://i.imgur.com/JQl1h1N.png" alt="Assistant" class="w-16 h-16 rounded-full mr-4 flex-shrink-0">
                <div class="assistant-bubble p-4">
                    <p>Negative prompts help remove unwanted elements! Common issues like extra limbs, distorted faces, or bad anatomy can be reduced by specifying what you <em>don't</em> want.</p>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div class="grid md:grid-cols-2 divide-x divide-gray-100">
                    <div class="p-4">
                        <h3 class="font-medium mb-2 text-red-500">Without Negative Prompt</h3>
                        <div class="bg-gray-800 rounded-md p-3 mb-3">
                            <code class="text-gray-100">"portrait of a beautiful woman"</code>
                        </div>
                        <div class="flex justify-center">
                            <img src="https://i.imgur.com/def789.png" alt="AI art without negative prompt" class="h-48 rounded border border-gray-200">
                        </div>
                        <p class="text-xs text-center mt-2 text-gray-500">May have artifacts or distortions</p>
                    </div>
                    <div class="p-4">
                        <h3 class="font-medium mb-2 text-green-500">With Negative Prompt</h3>
                        <div class="bg-gray-800 rounded-md p-3 mb-3">
                            <code class="text-gray-100">"portrait of a beautiful woman"</code>
                            <div class="mt-1 text-gray-400 text-sm">Negative prompt:</div>
                            <code class="text-gray-300">"blurry, extra limbs, distorted face, bad anatomy, deformed hands"</code>
                        </div>
                        <div class="flex justify-center">
                            <img src="https://i.imgur.com/ghi012.png" alt="AI art with negative prompt" class="h-48 rounded border border-gray-200">
                        </div>
                        <p class="text-xs text-center mt-2 text-gray-500">Cleaner results with fewer artifacts</p>
                    </div>
                </div>
            </div>
            
            <h2 class="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <i class="fas fa-4 text-purple-500 mr-3 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center"></i>
                Choosing the Right Model
            </h2>
            
            <div class="flex items-start mb-6">
                <img src="https://i.imgur.com/JQl1h1N.png" alt="Assistant" class="w-16 h-16 rounded-full mr-4 flex-shrink-0">
                <div class="assistant-bubble p-4">
                    <p>Different models specialize in different styles! Try these popular ones:</p>
                </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h3 class="font-medium">Realistic Vision</h3>
                    </div>
                    <p class="text-sm mb-3">For photorealistic images</p>
                    <div class="flex justify-center">
                        <img src="https://i.imgur.com/jkl345.png" alt="Realistic example" class="h-32 rounded border border-gray-200">
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                            <i class="fas fa-magic"></i>
                        </div>
                        <h3 class="font-medium">Anything V3</h3>
                    </div>
                    <p class="text-sm mb-3">Great for anime style</p>
                    <div class="flex justify-center">
                        <img src="https://i.imgur.com/mno678.png" alt="Anime example" class="h-32 rounded border border-gray-200">
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-2">
                            <i class="fas fa-palette"></i>
                        </div>
                        <h3 class="font-medium">DreamShaper</h3>
                    </div>
                    <p class="text-sm mb-3">Fantasy and concept art</p>
                    <div class="flex justify-center">
                        <img src="https://i.imgur.com/pqr901.png" alt="Fantasy example" class="h-32 rounded border border-gray-200">
                    </div>
                </div>
            </div>
            
            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i class="fas fa-download text-purple-500 mt-1 mr-3"></i>
                    </div>
                    <div>
                        <p class="text-sm text-purple-700">You can find these models on platforms like Civitai or Hugging Face. Always check the license before use!</p>
                    </div>
                </div>
            </div>
            
            <div class="flex justify-between border-t border-gray-200 mt-12 pt-6">
                <a href="#" class="text-purple-500 hover:text-purple-700 font-medium flex items-center">
                    <i class="fas fa-arrow-left mr-2"></i> Previous: Introduction
                </a>
                <a href="#" class="text-purple-500 hover:text-purple-700 font-medium flex items-center">
                    Next: Advanced Techniques <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
            
            <!-- Assistant Final Tip -->
            <div class="flex items-start mt-12 bg-white rounded-lg shadow-sm p-4 border border-purple-200">
                <img src="https://i.imgur.com/JQl1h1N.png" alt="Assistant" class="w-16 h-16 rounded-full mr-4 flex-shrink-0">
                <div>
                    <h3 class="font-medium mb-2">Sakura's Pro Tip!</h3>
                    <p class="mb-2">Remember that AI art is a collaboration between you and the model. Don't get discouraged if your first attempts aren't perfect!</p>
                    <p>Try these for better results:</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1">
                        <li>Start simple and add details gradually</li>
                        <li>Use commas to separate concepts</li>
                        <li>Experiment with different samplers</li>
                        <li>Try varying the CFG scale (7-12 is usually good)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const sidebar = document.getElementById('sidebar');
        
        mobileMenuButton.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (event) => {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnMenuButton = mobileMenuButton.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnMenuButton && window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });
        });
        
        // Tooltip functionality
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tip => {
            tip.addEventListener('mouseenter', () => {
                const tooltipText = tip.querySelector('.tooltiptext');
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            });
            tip.addEventListener('mouseleave', () => {
                const tooltipText = tip.querySelector('.tooltiptext');
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            });
        });
    </script>
</body>
</html>
