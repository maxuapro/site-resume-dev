const posts = [
    {
        id: "1",
        title: "Hello Darkness, my old friend",
        slug: "the-post-number-1",
        date: "2021-07-12T12:00:37.011Z",
        text: `<p>Node.js is an open source JavaScript runtime environment for easily building server-side and networking applications. The platform runs on Linux, OS X, FreeBSD, and Windows. Node.js applications can be run at the command line, but we’ll focus on running them as a service, so that they will automatically restart on reboot or failure, and can safely be used in a production environment.</p><p>In this tutorial, we will cover setting up a production-ready Node.js environment on a single Ubuntu 16.04 server. This server will run a Node.js application managed by PM2, and provide users with secure access to the application through an Nginx reverse proxy. The Nginx server will offer HTTPS, using a free certificate provided by Let’s Encrypt.</p><h2>Prerequisites</h2><p>This guide assumes that you have the following:</p><ul><li>An Ubuntu 16.04 server, configured with a non-root user with sudo privileges, as described in the <a href="https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04">initial server setup guide for Ubuntu 16.04</a>.</li><li>A domain name pointed at your server’s public IP, as per <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean">How to Set Up a Host Name with DigitalOcean</a>. This tutorial will use <strong>example.com</strong> throughout.</li><li>Nginx installed, covered in <a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04">How To Install Nginx on Ubuntu 16.04</a></li><li>Nginx configured with SSL using Let’s Encrypt certificates. <a href="https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04">How To Secure Nginx with Let’s Encrypt on Ubuntu 16.04</a> will walk you through the process.</li></ul>`,
        author: "Max Kosh",
        tags: ["programming"],
        image: 'https://woodgreen.org.uk/image/image/image/V8Iw3SL87ubcIekoP1DmmhekPFXPNbBL5yB4JpVR.jpeg?w=800&h=422&fit=crop-center'
    },
    {
        id: "2",
        title: "Adorable racoon 2",
        slug: "the-post-number-2",
        date: "2021-06-10T12:00:37.011Z",
        text: "<p>lorem ipsum lorem ipsum lorem ipsum</p>",
        author: "Max Kosh",
        tags: ["JavaScript"],
        image: 'https://i.natgeofe.com/k/6289c775-a06c-426a-badb-8d181a55237b/raccoon-grass.jpg?w=636&h=358'
    },
    {
        id: "3",
        title: "Octopus is such a cutie 3",
        slug: "the-post-number-123",
        date: "2021-01-22T12:00:37.011Z",
        text: "<p>lorem ipsum lorem ipsum lorem ipsum</p>",
        author: "Max Kosh",
        tags: ["JavaScript", "programming"],
        image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/F558/production/_118980826_oct.png'
    }
]

export default posts