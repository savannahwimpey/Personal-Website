function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav>
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStylesheets">CSS</a>
            </nav>

            <section id="webServers">
                <h3>Web Servers</h3>
                <p>
                    A designated home page is typically the root directory for the website you are visiting.
                    This page is typically the user's first introduction to the website, and it is very important
                    that it holds useful information and <strong>hyperlinks</strong>. The <strong>web server</strong>
                    will typically serve the <strong>index.html</strong> file when the user visits the root URL.
                    The designated homepage is typically composed of an <strong>HTML and CSS file</strong>. The designated
                    URL contains useful information, such as different file names as well as programming language
                    information. For example, static pages can be represented by the physical location of a file on a web
                    server. The ending of a URL can also denote what language the page is written in. In Microsoft's .NET
                    platform, default.html is the standard home page, denoting the HTML language. In other instances,
                    .js or .php can be used as the language and this information will be given in the URL.
                </p>
                <p>
                    In the browser's Inspector Network tab, you can see the requested URL, request method, status code,
                    remote address, and referrer policy. One of the most helpful tools is the <strong>status code</strong>.
                    This allows you to see if the file was served correctly, or if not, allows you to see what kind of error
                    occurred. Another helpful tool is the headers tab. This allows you to see all the different headers sent
                    and received when the web page was served. When looking at the Network Tab, you can see the status of
                    the page. When looking at the status of the page run locally, there is no connection to the server.
                    We can see a status of 200, which tells us that index.html is being accessed, but immediately after, we
                    see failure for main.css and main.js. When investigating the Network tab on the web page hosted on the
                    OSU server, we see a status of 200 for the index.html, we then get status 404 for the main.css and
                    main.js. Status 404 tells us that the page we are trying to access in unavailable, but our website is
                    attempting to access the page.
                </p>
                <p>
                    The favicon.ico file is an icon file for the webpage. It can be seen at the top of the browser, inside
                    the tab that holds the site. When viewed from the Network tab of the developer tools in the browser, it
                    displays an HTTP 200 status code, signifying that its contents were found and served with no errors. The
                    main.js and main.css files, on the other hand, display a 404 error code, signifying that the files could
                    not be found and served by the web server.
                </p>
                <p>
                    There are many parts of my web server's URL. The <strong>scheme</strong> is https://.
                    The <strong>subdomains</strong> are web and engr.
                    The <strong>domain</strong> is oregonstate.edu, and the resources are ~wimpeys/webdev/M1/a1-wimpeys/.
                </p>
            </section>

            <section id="frontendDesign">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> involves creating a good experience for the user when they interact
                    with a product or system. An effective design includes pleasing visuals such as a color scheme,
                    appropriate fonts, and pictures. It also ensures the website is relatively easy to navigate. The quality
                    of a website's design is measured by its <strong>usability</strong> and <strong>inclusivity</strong>.
                    Usability is determined by evaluating a product or system using the Five "E"s.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>It is effective in ensuring the user's needs or goals are met.</dd>
                    <dt>Efficient</dt>
                    <dd>It meets the user's goals simply and quickly.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>Even for first-time users, it is easy for the user to find and meet their goal, and remember the
                        process.
                    </dd>
                    <dt>Error-free</dt>
                    <dd>It does not contain errors that disrupt the user's experience.</dd>
                    <dt>Enjoyable or engaging</dt>
                    <dd>It meets the needs of the intended audience.</dd>
                </dl>
                <p>
                    Page layout tags serve the purpose of breaking up content and adding structure to a page of a website. A
                    page usually includes a header, nav, main, articles, asides, and a footer. The <strong>header</strong>
                    is usually at the top of the page and displays the website's name, publisher, and marketing slogan.
                    The <strong>nav</strong> element helps users move from page to page quickly and easily. They often
                    appear as clickable button shortcuts to the main menu, search, tools, stories, locations, and legal links.
                    The <strong>main</strong> element is the main area of a page that organizes the website's content into
                    different categories. <strong>Sections</strong> are groups of similarly themed content on a web page.
                    Within a section, there may be multiple <strong>articles</strong> that discuss unique topics relating to
                    the section's theme. A <strong>footer</strong> tag is typically displayed at the bottom of a web page
                    and contains information such as the website owner's copyright statement, contact information, and legal
                    information.
                </p>
                <ol>
                    <li>
                        Anchors link to external content by using the href attribute and including the URL of the desired
                        page inside the anchor tags. Linking to external content requires an <strong>absolute path</strong>
                        that includes a complete URL to the outside resource.
                    </li>
                    <li>
                        Anchors link to internal content by using IDs. The ID attribute is paired with the href attribute,
                        which includes a hashtag plus the ID. This type of link will jump to the specified topic on the
                        page. Linking to internal content can be accomplished using a relative path. A <strong>relative
                            path</strong> includes a URL that points to a location in a file.
                    </li>
                    <li>
                        Anchors link from page to page in the same way as linking to external content. Page-to-page links
                        are usually displayed to look like buttons.
                    </li>
                </ol>
            </section>

            <section id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>
                    Optimized images meet 6 important specifications. It helps search engines categorize images if they are
                    assigned a <strong>descriptive file name</strong>. To ensure the images load
                    quickly on a web page, compress the images down to a <strong>small file size</strong>. Crop images
                    to <strong>exact dimensions</strong> to ensure they fit properly on the web page. Make sure the images
                    are saved in the <strong>correct file format</strong> and <strong>color mode</strong>. Lastly, always
                    <strong>reduce resolution</strong> for optimal load time.
                </p>
                <p>
                    JPG and WebP are typically appropriate file formats for photos. JPG supports most colors and holds high
                    image quality and resolution even after compression. <strong>JPG</strong> works especially well with
                    images that have smooth color transitions. SVG, PNG, or GIF are better suited for line art.
                    <strong>SVG</strong> is
                    excellent for line art and graphics, because it holds very high quality at any size.
                    <strong>PNG</strong> is similar to SVG, but
                    it offers lossless compression, meaning it loses no quality during compression. <strong>GIF</strong> is
                    often used
                    for simple graphics or animations that are not hindered by its limited color options. GIF can only
                    display 256
                    colors in an image, making it less ideal for more complex images.
                </p>
            </section>

            <section id="favicons">
                <h3>Favicons</h3>
                <p>
                    <strong>Favicons</strong> are favorite icons or logos that appear in the browser tab to identify a
                    website quickly.
                    Saving a web page to the home screen of a handheld device will display an application identified by the
                    favicon icon.
                </p>
            </section>

            <section id="cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>
                    <strong>Cascading Stylesheets</strong> are used to add more in-depth style to a webpage. CSS redefines
                    how a webpage appears to the user and how they interact with the site. The main reasons for adding style
                    is to improve usability and readability, and offer website customization while incorporating brand or
                    company requirements.
                </p>
                <p>
                    There are 5 main ways to incorporate style. CSS files are <strong>linked</strong> in the global head of
                    a website or <strong>imported</strong> into a global stylesheet. Style can also be
                    <strong>embedded</strong> in a style tag, written <strong>inline</strong> using an attribute and value,
                    or by using the Document Object Model in <strong>JavaScript</strong>.
                </p>
            </section>
        </>
    );
}

export default TopicsPage;
