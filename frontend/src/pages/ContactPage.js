<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Savannah Wimpey</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png">
    <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
</head>

<body>
    <header>
        <h1>
            <img src="favicon-32x32.png" alt="Savannah Wimpey" />
            Savannah Wimpey
        </h1>
    </header>
    <nav class="local">
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
        <a href="order.html">Order</a>
    </nav>
    <main>
        <section>
            <h2>Contact</h2>
            <article>
                <!-- info to be added later -->
            </article>

            <h3>Let's Connect!</h3>
            <form action="/results" method="POST">

                <fieldset>

                    <legend>Tell us what you think!</legend>
                    <p>* indicates required fields.</p>
                    <!--Get name from user-->
                    <p>
                        <label for="firstlast" class="required">First and Last Name:</label>
                        <input type="text" name="firstlast" id="firstlast" size="25" maxlength="80" required
                            placeholder="First and last name" autofocus />
                    </p>
                    <!--Get email from user-->
                    <p>
                        <label for="email">Email:</label>
                        <input type="email" name="eAddress" id="email" size="30" maxlength="100" required
                            pattern="[^ @]+@[^ @]+\.[a-z]+" placeholder="name@host.com" />

                    </p>
                    <!--Get comments from user-->
                    <p><label for="comments">Send me a message!</label>
                        <textarea name="comments" id="comments" minlenth="4" maxlenth="200" required
                            placeholder="200 characters or less please."></textarea>
                    </p>

                </fieldset>

                <fieldset>

                    <!--Ask user for feedback-->

                    <legend>Give me some feedback!</legend>
                    <label for="how">How do you rate the site?</label>
                    <select name="rate" id="how">
                        <option value="Poor">Poor</option>
                        <option value="Average">Average</option>
                        <option value="Great" selected>Great!</option>
                    </select>



                    <!--Ask user to rate the site-->
                    <p>How likely are you to view my site again?
                        <label for="not">
                            <input type="radio" name="view" id="not" value="Not likely">
                            Not likely
                        </label>

                        <label for="maybe">
                            <input type="radio" name="view" id="maybe" value="Somewhat Likely">
                            Somewhat Likely
                        </label>

                        <label for="yes">
                            <input type="radio" name="view" id="yes" value="Very likely!" checked>
                            Very likely!
                        </label>
                    </p>

                    <!--Ask if the user would like to receive updates-->
                    <p>Send me site updates:
                        <!--daily updates-->
                        <label for="updates">
                            <input type="checkbox" name="subscribe" id="updates" value="daily" checked />
                            daily
                        </label>
                        <!--weekly updates-->
                        <label for="updates">
                            <input type="checkbox" name="subscribe" id="updates" value="weekly" />
                            weekly
                        </label>

                        <!--monthly updates-->
                        <label for="updates">
                            <input type="checkbox" name="subscribe" id="updates" value="monthly" />
                            monthly
                        </label>

                        <!--no updates-->
                        <label for="updates">
                            <input type="checkbox" name="subscribe" id="updates" value="no" />
                            Please don't send me updates.
                        </label>
                    </p>

                    <!--submit button-->
                    <label for="submit">
                        <button type="submit" id="submit" name="results">Submit review</button>
                    </label>

                </fieldset>
            </form>

        </section>
    </main>
    <footer>
        <p>&copy; 2024 Savannah Wimpey</p>
    </footer>
</body>

</html>