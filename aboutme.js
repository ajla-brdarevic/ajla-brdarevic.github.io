const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const listItems = document.querySelectorAll('.about li');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const backButton = document.getElementById('backButton');

listItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        let content = '';
        switch (index) {
            // Technical Skills
            case 0:
                content = `
            <div class="technical-skills-grid">

                <div class="skill-category">
                    <b>Web Development</b><br>
                    <ul><br>
                        <li><a href="https://github.com/stars/ajla-brdarevic/lists/frontend" target="_blank">Frontend</a>: HTML, CSS, JavaScript, React</li>
                        <li><a href="https://github.com/stars/ajla-brdarevic/lists/backend" target="_blank">Backend</a>: Node.js, Java Spring Boot</li><br>
                        <li><a href="https://github.com/stars/ajla-brdarevic/lists/web-development" target="_blank">Projects</a></li>
                    </ul>
                </div>

                <div class="skill-category">
                    <b>Mobile App Development</b>
                    <ul><br>
                        <li>.NET MAUI, C#</li><br><br>
                        <li><a href="https://github.com/stars/ajla-brdarevic/lists/mobile-app-development" target="_blank">Projects</a></li>
                    </ul>
                </div>

                <div class="skill-category">
                <b>Testing</b>
                    <ul><br>
                        <li>Manual, Automation in Selenium C#</li><br><br>
                        <li><a href="https://github.com/stars/ajla-brdarevic/lists/testing" target="_blank">Projects</a></li>
                    </ul>
                </div>

                <div class="skill-category">
                <b>Embedded Systems</b>
                    <ul><br>
                        <li>Arduino, C/C++</li><br><br>
                        <li><a href="https://github.com/stars/ajla-brdarevic/lists/embedded-systems" target="_blank">Projects</a></li>
                    </ul>
                </div>

                <div class="skill-category">
                    <b>Programming Languages</b>
                    <ul><br>
                        <li>C++, C, C#, Python, JavaScript, Java</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <b>Design</b>
                    <ul><br>
                        <li>Figma</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <b>Agile</b>
                    <ul><br>
                        <li>SCRUM, Sprint Design</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <b>Database</b>
                    <ul><br>
                        <li>Access, MySQL, MongoDB</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <b>Version Control</b>
                    <ul><br>
                        <li>Git, GitHub</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <b>Project Management</b>
                    <ul><br>
                        <li>Jira, Trello, Asana, Notion</li>
                    </ul>
                </div>

            </div>`;
                break;

            // Soft Skills
            case 1:
                content = `
            <div class="soft-skills">

                <div class="skill">
                    <b>Analytical and Critical Thinking</b>
                    <p>Proficient in dissecting complex problems, analyzing data, and deriving strategic insights to drive informed decision-making</p>
                </div>

                <div class="skill">
                    <b>Active Learning Strategies</b>
                    <p>Adept at adopting and implementing diverse learning approaches, ensuring continuous skill enhancement and staying abreast of industry trends.</p>
                </div>

                <div class="skill">
                    <b>Creativity and Initiative</b>
                    <p>Demonstrates a flair for creative thinking, generating original ideas, and taking innovative initiatives to bring fresh perspectives to projects.</p>
                </div>

                <div class="skill">
                    <b>Adaptability and Flexibility</b>
                    <p>Thrives in dynamic environments, showcasing the ability to adapt to change, and maintaining flexibility to excel in professional scenarios.</p>
                </div>

            </div>
            `;
                break;

            //Academics
            case 2:
                content = `
                <div class="timeline">

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <h3>Master of Software Engineering (2024 - present)</h3>
                            <a href="https://ptf.unze.ba" target="_blank">Polytehnic Faculty, University of Zenica</a>
                        </div>
                    </div>

                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Bachelor of Software Engineering (2020 - 2023)</h3>
                        <a href="https://ptf.unze.ba" target="_blank">Polytehnic Faculty, University of Zenica</a>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Gymnasium</h3>
                        <a href="https://www.gimnazija-ze.com.ba" target="_blank">First Gymnasium in Zenica, Mathematics-Informatics</a>
                    </div>
                </div>
                
                </div>`;
                break;

            //Working experience
            case 3:
                content = `
                <div class="experience-timeline">
                    <div class="experience-item">
                        <div class="experience-date">January 2024</div>
                            <h3>- Nauka govori - IT journalist</h3>
                            <p> I contribute part-time as a writer for the 
                            <a href="https://naukagovori.ba" target="_blank">Nauka govori</a> portal, with a specific focus on the IT industry. The portal promotes 
                            scientific literacy, human rights, and education in Bosnia and Herzegovina. 
                            <br><a href ="https://naukagovori.ba/defanziva-protiv-cyber-napada-od-phishinga-do-denial-of-service-kako-se-zastititi/" target="_blank">My Work on Nauka Govori!</a>
                            </p>
                        </div>

                    <div class="experience-item">
                        <div class="experience-date">August 2023 - September 2023</div>
                            <h3>- BH Telecom - internship</h3>
                            <p>I undertook a one-month internship at BH Telecom, Zenica, in the Department for Technical Support. I participated in optical cable testing 
                            and fieldwork with the Office for Access Networks and Terminal Equipment, gaining valuable technical skills and insights into corporate operations.
                            </p>
                        </div>
                    </div>

                </div>
`;
                break;

            //Extracurriicular
            case 4:
                content = `
                <div class="card-container">
                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/hnta.jpeg" alt="Helem Nejse Talent Akademija">
                        </div>
                        <div class="card-content">
                            <h2>Helem Nejse Talent Academy</h2>
                            <p>Participant (August 2024, Sarajevo)</p>
                            <p>Odgovorno kodiranje</p>
                            <p><i>Fondacija Ekipa</i></p>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7236418630475776000/" target="_blank">More...</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/ict.jpg" alt="Girls in ICT">
                        </div>
                        <div class="card-content">
                            <h2>Girls in ICT Day</h2>
                            <p>Speaker (April 2024, Sarajevo)</p>
                            <p>Opportunities for girls</p>
                            <p><i>Women4Cyber B&H, UNITED</i></p>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7189284365275709440/" target="_blank">More...</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/winter.jpg" alt="Award 2">
                        </div>
                        <div class="card-content">
                            <h2>Cyber Security Winter School</h2>
                            <p>Participant (January 2024, Sarajevo)</p>
                            <p>Introduction to Cybersecurity</p>
                            <p><i>Women4Cyber B&H, UNITED</i></p>
                            <a href="https://www.linkedin.com/posts/ajla-brdarevi%C4%87_tokom-prethodna-tri-dana-imala-sam-priliku-activity-7156314554304454656-9CuP?utm_source=share&utm_medium=member_desktop" target="_blank">More...</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/cbc.png" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>Circuit Business Consulting CS</h2>
                            <p>Participant (December 2023, Sarajevo)</p>
                            <p>Case Study Event</p>
                            <p><i>Circuit Business Consulting</i></p>
                            <a href="https://www.linkedin.com/posts/circuit-business-consulting_cbc-students-bosnia-ugcPost-7142600697832763393-Df-H?utm_source=share&utm_medium=member_desktop" target="_blank">More...</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/summercamp.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>Smart Automation Summer Camp</h2>
                            <p>Participant (September 2023, Sarajevo)</p>
                            <p>3-day summer camp</p>
                            <p><i>IT Girls B&H</i></p>
                            <a href="https://www.linkedin.com/posts/ajla-brdarevi%C4%87_itgirls-itgirlsbih-unicef-activity-7107114637409615873-6UuC?utm_source=share&utm_medium=member_desktop" target="_blank">More...</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/itgirls.jpg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>III Cycle of the Mentoring Program</h2>
                            <p>Mentee (December 2022, Online)</p>
                            <p>Quality Assurance</p>
                            <p><i>IT Girls B&H</i></p>
                            <a href="https://www.instagram.com/p/Cj-o3Q3tdK5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/reconnect.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>Reconnect Hackathon</h2>
                            <p>Participant (October 2023, Zenica)</p>
                            <p>Mobile App</p>
                            <p><i>UNZE, Blandus</i></p>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6987479134234927104/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/drugiciklus.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>II Cycle of the Mentoring Program</h2>
                            <p>Mentee (December 2021, Online)</p>
                            <p>Embedded Systems</p>
                            <p><i>IT Girls B&H</i></p>
                            <a href="https://www.linkedin.com/posts/ajla-brdarevi%C4%87_mentorshipmatters-itgirls-mentoringprogramme-activity-6869770073402421248-KSXZ?utm_source=share&utm_medium=member_desktop" target="_blank">More...</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/academy2019.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>EYP Academy</h2>
                            <p>PR Organizer (May 2019, Sarajevo)</p>
                            <p>Members weekend</p>
                            <p><i>EYP B&H</i></p>
                            <a href="https://eyp.ba/en/home/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/zenica2019.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>EYP 29th Regional Session</h2>
                            <p>CR Organizer (March 2019, Zenica)</p>
                            <p><strong>Description:</strong> Won first place in a 48-hour hackathon for developing a mobile app.</p>
                            <p><i>EYP B&H</i></p>
                            <a href="https://eyp.ba/en/home/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/bal.JPG" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>EYP B&H Members Weekend (NY’s Ball)</h2>
                            <p>CR Organizer (December 2018, Zenica)</p>
                            <p>Members Weekend</p>
                            <p><i>EYP B&H</i></p>
                            <a href="https://www.facebook.com/share/p/HAxcR8cJJNkbpr88/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/meetcode.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>Meet&Code</h2>
                            <p>Participant (October 2018, Zenica)</p>
                            <p>Coding Weekend</p>
                            <p><i>ASuBiH, IBU</i></p>
                            <a href="https://asubih.ba" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/debata.jpg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>Public Debate</h2>
                            <p>Participant (July 2018, Zenica)</p>
                            <p>"Kažnjavanje ne glasanja"</p>
                            <p><i>City debating club "Agora"</i></p>
                            <a href="https://www.facebook.com/share/p/wydqpQLd1ezjWdrN/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/understandingeu.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>Understanding Europe</h2>
                            <p>Participant (May 2018, Zenica)</p>
                            <p>Structure of EU</p>
                            <p><i>EYP B&H</i></p>
                            <a href="https://eyp.ba/en/home/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/basana.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>EYP National Session Basana</h2>
                            <p>Delegate (April 2018, Zenica-Sarajevo)</p>
                            <p>CULT</p>
                            <p><i>EYP B&H</i></p>
                            <a href="https://www.facebook.com/basana2018/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/zenica2018.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>EYP Regional Forum</h2>
                            <p>Delegate (Februar 2018, Zenica)</p>
                            <p>JURI</p>
                            <p><i>EYP B&H</i></p>
                            <a href="https://eyp.ba/en/home/" target="_blank">More...</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-cover">
                            <img src="images/certificates/zenica2017.jpeg" alt="Award 3">
                        </div>
                        <div class="card-content">
                            <h2>EYP Regional Forum</h2>
                            <p>Delegate (December 2017, Zenica)</p>
                            <p>ECON</p>
                            <p><i>EYP B&H</i></p>
                            <a href="https://eyp.ba/en/home/" target="_blank">More...</a>
                        </div>
                    </div>
                    <!-- Add more cards as needed -->
                </div>`;
                break;

            //Awards
            case 5:
                content = `
                <div class="hackathon-experience">
                    <div class="hackathon-content">
                        <div class="hackathon-text">
                            <h3>Reconnect Hackathon - October 2022</h3>
                            <p>One of the standout experiences I must highlight is the 
                                <a href="https://ptf.unze.ba/svecano-urucene-nagrade-pobjednicima-takmicenja-reconnect-hackathon/" target="_blank">
                                Reconnect Hackathon</a>, held in October 2022. My team, "Code of Duty," secured 
                                <i>second place</i> with the idea for the mobile app "Time for a Challenge".
                                We applied our academic knowledge in <i>software analysis and design</i> and explored new technologies like 
                                <i>Swift</i> for the first time.
                            </p>
                        </div>
                        <div class="hackathon-images">
                            <img src="images/certificates/reconnectdiploma.jpeg" alt="Reconnect Hackathon 2022">
                            <img src="images/reconnect.JPG" alt="Code of Duty Team">
                        </div>
                    </div>
                </div>`;
                break;

            //Organzations
            case 6:
                content = `
                <div class="organizations-experience">
                    <div class="organization-content">
                        <div class="organization-text">
                            <h3>IT Girls Bosnia and Herzegovina</h3>
                            <p>For several years, I have been actively involved in the events organized by 
                            <a href="https://itgirls.ba" target="_blank">IT Girls Bosnia and Herzegovina</a>. 
                            I have participated in two cycles of their mentorship program and attended webinars 
                            focused on business skills. Additionally, I worked on a project showcased 
                            <a href="https://www.instagram.com/p/CYBuW5rtXlA" target="_blank">here</a>. 
                            My engagement also included a three-day summer camp centered on automation, 
                            where I was part of the project management team. I've also attended several 
                            webinars organized by IT Girls, each providing valuable insights into technology and career growth.</p>
                        </div>
                        <div class="organization-images">
                            <img src="images/itgirls.jpg" alt="IT Girls Bosnia and Herzegovina">
                        </div>
                    </div>

                    <div class="organization-content">
                        <div class="organization-text">
                            <h3>Women4Cyber Bosnia and Herzegovina</h3>
                            <p>I have also had the opportunity to be involved with <a href="https://www.linkedin.com/company/women4cyber-bosnia-and-herzegovina/?originalSubdomain=ba" target="_blank">Women4Cyber</a> 
                            in collaboration with the United Association. To date, I have participated in two significant events, once as an attendee 
                            and the second time as a speaker during the Girls in ICT Day. I spoke about my journey in the IT industry, sharing insights 
                            and encouraging other young women to pursue careers in technology. These experiences have been crucial in building my confidence 
                            and expanding my professional network in the cybersecurity field.</p>                        
                        </div>
                        <div class="organization-images">
                            <img src="images/cyber.jpg" alt="Women4Cyber Bosnia and Herzegovina">
                        </div>
                    </div>

                     <div class="organization-content">
                        <div class="organization-text">
                            <h3>European Youth Parliament</h3>
                            <p>Among the numerous organizations, 
                                <a href="https://eyp.org" target="_blank">European Youth Parliament</a> captured my attention the most. 
                                I dedicated most of my time to EYP, and in return, I learned many soft skills, improved my English, 
                                and met diverse individuals. As a delegate, organizer, and regional coordinator, I learned to work within 
                                a group while independently shouldering responsibility for significant matters. From handling bureaucratic 
                                issues to event organization and project writing, to engaging in political discussions, this organization 
                                had a profound impact on my personal and professional development.
                            </p>
                        </div>
                        <div class="organization-images">
                            <img src="images/eyp.jpg" alt="European Youth Parliament">
                        </div>
                    </div>
                </div>`;
                break;

            //Hobbies
            case 7:
                content = `
                    <div class="hobbies">
                        <img src="images/ballet.jpg">
                        <p>Besides technology, another constant in my life has been art. I attended both a music school
                            and ballet school. I play the <i>violin</i>, <i>piano</i>, and <i>guitar</i>, and I used to
                            dance <i>ballet</i>.
                            <i>Moscow International Festival of Slavic Music</i> is the moment I hold dear and always
                            cherish, because I was awarded a special prize.
                        </p>
                        <p>As a programming 'polyglot,' I've expanded my language talents beyond code to human
                            languages.
                            Learning new languages has become a quirky hobby, enhancing my Netflix experience and adding
                            a
                            touch
                            of wanderlust. Recently, I've taken up sewing, merging creativity with environmental
                            consciousness
                            in sustainable fashion.
                            My diverse interests include crossword puzzles, quizzes, a passion for
                            Formula 1, and a dedication to films, series, books, and music.
                    </div>`;
                break;

            //Aspiration
            case 8:
                content = `
                    <div class="aspirations">
                        <p>Currently, I am open to exploring a wide range of career opportunities within the field of
                        software engineering. I embrace the idea of versatility and am not hesitant to venture into
                        any
                        career path that aligns with my passion and expertise. I firmly believe that every
                        opportunity,
                        regardless of its specific focus, has the potential to be a stepping stone in my journey. My
                        plan
                        for the future is to pursue a master's degree in software engineering, allowing me to
                        complete the
                        bigger picture.<br><br>
                        Along the way, I aim to gain valuable work experience to further develop my technical
                        skills,
                        and to explore different facets of the industry to find the path I'd like to commit to in
                        the long
                        run. While my studies have exposed me to a broad spectrum of topics, a few areas have
                        particularly
                        piqued my interest: Embedded systems and the Internet of Things (IoT) and I've delved into
                        diverse
                        back-end development techniques for various types of applications. While I'm increasingly
                        drawn to AI, I
                        acknowledge that I may not yet possess the depth of knowledge and experience required to
                        prioritize it as my sole focus.<br> <br>
                        Moreover, I've always been drawn to the idea of blending my technical expertise with skills
                        I've acquired over time and excel in naturally. Collaborating within a team dynamic and
                        assuming leadership roles is one such skill set. Hence, I've chosen this career path,
                        allowing me to integrate my evolving technical skills with my passion for exploring business
                        strategies
                        and life cycle of developing a certain product.
                        </p>
                    </div>`;
                break;

            // Dodaj sadržaj za ostale stavke liste
            default:
                content = '<p>Default content for other items...</p>';
                break;
        }
        popupText.innerHTML = content; // Unesi HTML sadržaj u pop-up
        popup.style.display = 'block'; // Prikazi pop-up
    });
});

// Zatvori pop-up kada se klikne na strelicu
backButton.addEventListener('click', function () {
    popup.style.display = 'none';
});
