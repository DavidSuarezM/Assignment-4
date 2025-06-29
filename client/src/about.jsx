import formal from './assets/FormalPhoto.JPG';
import resume from './assets/Resume DS.pdf';


export default function About() {
  return (
    <>
            <body>

                <div class="container">
                    <h2>🧑‍💻 About Me</h2>
                    <img src={formal} alt="David Suarez" class="profileImage" height="200" width="200"></img>
                        <p><strong>Name:</strong> David Andres Suarez Molina</p>
                        <p>I'm an international student from Ecuador, currently living in Toronto, Canada. I love coding, learning new programming languages, and everything related to technology. I also love the world of networks, which is why I studied Electronic Engineering with a focus on Telecommunications at the Salesian University of Ecuador. In Ecuador, I worked in the telecommunications field, installing structured cabling and laying GPON networks. I also taught networks and telecommunications, as a Cisco instructor.</p>
                        <a href={resume} target="_blank">📄 Check it out my resume!</a>
                </div>

            </body>
        </>

  );
}
