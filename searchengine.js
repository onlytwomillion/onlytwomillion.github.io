
        const mainContent = document.getElementById('mainContent');
        const searchResults = document.getElementById('searchResults');
        const searchInput = document.getElementById('searchInput');
        const sidebar = document.getElementById('sidebar');
        const menuList = document.getElementById('menuList');
        const resizeHandle = document.getElementById('resizeHandle');
        const toggleSidebarButton = document.getElementById('toggleSidebar');

        // Example data structure for menus and contents
        const contents = {
            personalFile: {
                paragraphs: [
                    'This is a detailed info about personal emais :twodrill1@gmail.com,tumusifuemmy020@gmail.com,rwandasportsrwanda@gmail.com.madocument123@gmail.com,websitec59@gmail.com,tumusifuemmy5@gmail.com,photoma97@gmail.com',
                    'mapersonalfile123@gmail.com,mamusic019@gmail.com.',
                    'Information on how to handle personal files securely.',
                    'Guidelines for maintaining personal files.',
                    'Common issues and solutions related to personal files.',
                    'Tips and tricks for managing personal files efficiently.',
                    'Frequently asked questions about personal files.'
                ],
                links: [
                    { title: 'mega cloud server under 2em control(file cloud online on email:madocument123@gmail.com)', url: 'https://mega.nz/fm/tKl0DZyK' },
                    { title: 'Whatsapp web on  ', url: 'https://web.whatsapp.com/' },
                    { title: 'audio mastering on web based program', url: 'music application.html' },
                    { title: ' drill free beat  on beatstar ', url: 'https://www.beatstars.com/search?type=tracks&q=drill%20beat' },
                    { title: 'Security Tips', url: '#security-tips' },
                    { title: 'Tools', url: '#tools' },
                    { title: 'Contact Support', url: '#contact-support' }
                ]
            },
            hackingTools: {
                paragraphs: [
                    'Detailed description of various hacking tools.',
                    'Analysis of popular hacking tools and their features.',
                    'Guidelines on the ethical use of hacking tools.',
                    'Risks associated with using hacking tools.',
                    'Best practices for securing systems against hacking tools.',
                    'Case studies involving hacking tools.',
                    'Legal implications of hacking tool usage.'
                ],
                links: [
                    { title: 'Top Tools', url: '#top-tools' },
                    { title: 'Usage Guidelines', url: '#usage-guidelines' },
                    { title: 'Security Measures', url: '#security-measures' },
                    { title: 'Case Studies', url: '#case-studies' },
                    { title: 'Legal Aspects', url: '#legal-aspects' },
                    { title: 'Ethical Hacking', url: '#ethical-hacking' },
                    { title: 'Resources', url: '#resources' }
                ]
            },
            webDesign: {
                paragraphs: [
                    'Introduction to modern web design principles.',
                    'Best practices for responsive web design.',
                    'Tips for creating user-friendly web interfaces.',
                    'Trends in web design for the current year.',
                    'Tools and technologies for web design.',
                    'Case studies of successful web design projects.',
                    'Common mistakes to avoid in web design.'
                ],
                links: [
                    { title: 'Responsive Design', url: '#responsive-design' },
                    { title: 'UI/UX Principles', url: '#ui-ux-principles' },
                    { title: 'Design Trends', url: '#design-trends' },
                    { title: 'Design Tools', url: '#design-tools' },
                    { title: 'Case Studies', url: '#case-studies' },
                    { title: 'Common Mistakes', url: '#common-mistakes' },
                    { title: 'Resources', url: '#resources' }
                ]
            },
            infoAnalysis: {
                paragraphs: [
                    'Overview of information analysis techniques.',
                    'Methods for analyzing large datasets.',
                    'Tools for information analysis and visualization.',
                    'Challenges in information analysis.',
                    'Case studies in successful information analysis.',
                    'Emerging trends in data analysis.',
                    'Best practices for reporting analysis results.'
                ],
                links: [
                    { title: 'Analysis Techniques', url: '#analysis-techniques' },
                    { title: 'Data Visualization', url: '#data-visualization' },
                    { title: 'Tools and Resources', url: '#tools-resources' },
                    { title: 'Case Studies', url: '#case-studies' },
                    { title: 'Trends and Innovations', url: '#trends-innovations' },
                    { title: 'Challenges', url: '#challenges' },
                    { title: 'Best Practices', url: '#best-practices' }
                ]
            },
            Search_engine: {
                paragraphs: [
                    'Overview of information analysis techniques.',
                    'Methods for analyzing large datasets.',
                    'Tools for information analysis and visualization.',
                    'Challenges in information analysis.',
                    'Case studies in successful information analysis.',
                    'Emerging trends in data analysis.',
                    'Best practices for reporting analysis results.'
                ],
                links: [
                    { title: 'Analysis Techniques', url: '#analysis-techniques' },
                    { title: 'Data Visualization', url: '#data-visualization' },
                    { title: 'Tools and Resources', url: '#tools-resources' },
                    { title: 'Case Studies', url: '#case-studies' },
                    { title: 'Trends and Innovations', url: '#trends-innovations' },
                    { title: 'Challenges', url: '#challenges' },
                    { title: 'Best Practices', url: '#best-practices' }
                ]
            },
            Network_analysis: {
                paragraphs: [
                    'Overview of information analysis techniques.',
                    'Methods for analyzing large datasets.',
                    'Tools for information analysis and visualization.',
                    'Challenges in information analysis.',
                    'Case studies in successful information analysis.',
                    'Emerging trends in data analysis.',
                    'Best practices for reporting analysis results.'
                ],
                links: [
                    { title: 'Wifi-Network& location information prompt commands', url: 'cmd codes.html' },
                    { title: 'Data Visualization', url: '#data-visualization' },
                    { title: 'Tools and Resources', url: '#tools-resources' },
                    { title: 'Case Studies', url: '#case-studies' },
                    { title: 'Trends and Innovations', url: '#trends-innovations' },
                    { title: 'Challenges', url: '#challenges' },
                    { title: 'Best Practices', url: '#best-practices' }
                ]
            },
            info_gathering: {
                paragraphs: [
                    'Overview of information analysis techniques.',
                    'Methods for analyzing large datasets.',
                    'Tools for information analysis and visualization.',
                    'Challenges in information analysis.',
                    'Case studies in successful information analysis.',
                    'Emerging trends in data analysis.',
                    'Best practices for reporting analysis results.'
                ],
                links: [
                    { title: 'ipaddress gathering due_to link on web based interface', url: 'https://grabify.link/' },//this website create shareable link to locate ipadd and other info
                    { title: 'checking shortened link in term of long  and checkshorturl', url: 'https://checkshorturl.com/' },
                    { title: 'copy the website source codes into your pc', url: 'https://toolsbug.com/website-copier-online.php' },
                    { title: 'search engine powered by GOOGLE ', url: 'https://cse.google.com/cse?cx=c592787943bde499a#gsc.tab=0' },
                    { title: 'Trends and Innovations', url: '#trends-innovations' },
                    { title: 'Challenges', url: '#challenges' },
                    { title: 'Best Practices', url: '#best-practices' }
                ]
            },
            Programming_and_codes: {
                paragraphs: [
                    'Overview of system settings and configurations.',
                    'Instructions for modifying system preferences.',
                    'Details on user account settings.',
                    'Security settings and recommendations.',
                    'Configuration for system performance optimization.',
                    'Customizable options for advanced users.',
                    'Troubleshooting common settings issues.'
                ],
                links: [
                    { title: 'visual studio codes and online powered by ai', url: 'code compiler.html' },
                    { title: 'make long URL,link be short ', url: 'https://tinyurl.com/' },
                    { title: 'Account Settings', url: '#account-settings' },
                    { title: 'Security', url: '#security' },
                    { title: 'Performance', url: '#performance' },
                    { title: 'Advanced Settings', url: '#advanced-settings' },
                    { title: 'Troubleshooting', url: '#troubleshooting' }
                ]
            }
        };

        // Populate menu list with sections
        function renderMenu() {
            const sections = Object.keys(contents);
            sections.forEach(section => {
                const link = document.createElement('a');
                link.href = `#${section}`;
                link.textContent = section.replace(/([A-Z])/g, ' $1').toUpperCase(); // Format section names
                link.addEventListener('click', () => loadSection(section));
                menuList.appendChild(link);
            });
        }

        // Load content for a specific section
        function loadSection(section) {
            const content = contents[section];
            if (!content) return;

            mainContent.innerHTML = `
                <h1>${section.replace(/([A-Z])/g, ' $1').toUpperCase()}</h1>
                <div id="contentParagraphs">
                    ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}
                </div>
                <div id="contentLinks">
                    ${content.links.map(link => `<a href="${link.url}">${link.title}</a>`).join('<br>')}
                </div>
            `;
        }

        // Handle search input
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            searchResults.innerHTML = '';

            Object.keys(contents).forEach(section => {
                const content = contents[section];
                let hasMatch = false;

                // Search paragraphs
                const matchingParagraphs = content.paragraphs.map(p => {
                    if (p.toLowerCase().includes(query)) {
                        hasMatch = true;
                        return `<p class="highlight">${p.replace(new RegExp(query, 'gi'), match => `<span class="highlight">${match}</span>`)}</p>`;
                    }
                    return '';
                }).join('');

                // Search links
                const matchingLinks = content.links.map(link => {
                    if (link.title.toLowerCase().includes(query)) {
                        hasMatch = true;
                        return `<p><a href="${link.url}" class="highlight">${link.title}</a></p>`;
                    }
                    return '';
                }).join('');

                if (hasMatch) {
                    searchResults.innerHTML += `
                        <h3>${section.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
                        ${matchingParagraphs}
                        ${matchingLinks}
                    `;
                }
            });
        });

        // Toggle sidebar visibility on small devices
        toggleSidebarButton.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });

        // Resizable Sidebar JavaScript
        let isResizing = false;

        resizeHandle.addEventListener('mousedown', (e) => {
            isResizing = true;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', () => {
                isResizing = false;
                document.removeEventListener('mousemove', handleMouseMove);
            });
        });

        function handleMouseMove(e) {
            if (isResizing) {
                const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
                if (newWidth > 100 && newWidth < 500) { // Min and Max widths
                    sidebar.style.width = `${newWidth}px`;
                }
            }
        }

        // Initial render
        renderMenu();

        // Set current year in the footer
        document.getElementById('year').textContent = new Date().getFullYear();