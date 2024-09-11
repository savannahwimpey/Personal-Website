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
            <h2>Order</h2>

            <article>
                <p>Please tell us what you would like to order.</p>
                <form action="/ordered" method="POST">

                    <fieldset>

                        <legend>Who are you?</legend>
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

                        <!--Get user's address-->
                        <p>
                            <label for="street">Street Address:</label>
                            <input type="text" id="street" name="street" required
                                placeholder="address, city, state, zip" />
                        </p>

                        <!--Get delivery insturctions from user-->
                        <p><label for="delivery">Delivery Details:</label>
                            <textarea name="delivery" id="delivery" minlenth="4" maxlenth="200" required
                                placeholder="200 characters or less please."></textarea>
                        </p>
                    </fieldset>

                    <!--Order fieldset-->
                    <fieldset>
                        <legend>Our selection of pet products</legend>
                        <table id="productTable">
                            <caption>Select the item you wish to order.</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!--row 1-->
                                <tr>
                                    <td>AGYM</td>
                                    <td>
                                        <label for="agym">
                                            <input type="radio" required name="productOrder" id="agym"
                                                value="Spinning Cat Scratcher Ball" />
                                            Spinning Cat Scratcher Ball
                                        </label>
                                    </td>
                                    <td>$52.99</td>

                                </tr>
                                <!--row 2-->
                                <tr>
                                    <td>Jasonwell</td>
                                    <td>
                                        <label for="jasonwell">
                                            <input type="radio" required name="productOrder" id="jasonwell"
                                                value="Foldable Dog Pool" />
                                            Foldable Dog Pool
                                        </label>
                                    </td>
                                    <td>$27.25</td>
                                </tr>
                                <!--row 3-->
                                <tr>
                                    <td>Expawlorer</td>
                                    <td>
                                        <label for="expawlorer">
                                            <input type="radio" required name="productOrder" id="expawlorer"
                                                value="Dog Fence Window" />
                                            Dog Fence Window
                                        </label>
                                    </td>
                                    <td>$30.50</td>
                                </tr>
                                <!--row 4-->
                                <tr>
                                    <td>Lollimeow</td>
                                    <td>
                                        <label for="lollimeow">
                                            <input type="radio" required name="productOrder" id="lollimeow"
                                                value="Capsule Pet Travel Backpack" />
                                            Capsule Pet Travel Backpack
                                        </label>
                                    </td>
                                    <td>$59.00</td>
                                </tr>
                                <!--row 5-->
                                <tr>
                                    <td>Drool\'d</td>
                                    <td>
                                        <label for="drool\'d">
                                            <input type="radio" required name="productOrder" id="drool\'d"
                                                value="Cat Hamster Wheel" checked />
                                            Cat Hamster Wheel
                                        </label>
                                    </td>
                                    <td>$349.75</td>
                                </tr>
                                <!--row 6-->
                                <tr>
                                    <td>Lollimeow</td>
                                    <td>
                                        <label for="lollimeow">
                                            <input type="radio" required name="productOrder" id="lollimeow"
                                                value="Sherpa Bubble Cat Carrier Backpack" />
                                            Sherpa Bubble Cat Carrier Backpack
                                        </label>
                                    </td>
                                    <td>$79.99</td>
                                </tr>
                            </tbody>

                        </table>
                        <!--text box for user to enter the quantity they wish to order-->
                        <p>
                            <label for="quantity">How many would you like? Max Quantity: 50</label>
                            <input type="number" name="orderQuantity" id="quantity" min="1" max="50" required
                                placeholder="?"></textarea>
                        </p>

                        <p>Please review your selection.</p>

                        <!--submit order button-->
                        <label for="submitOrder">
                            <button type="submit" id="submitOrder" name="order">Place Order</button>
                        </label>
                </form>

                </fieldset>
            </article>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Savannah Wimpey</p>
    </footer>
</body>

</html>