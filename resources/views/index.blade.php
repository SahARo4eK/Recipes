<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>MyProject!</title>
    </head>
    <body>
        <div id="app">
            <navbar-vue></navbar-vue>
            <content-vue></content-vue>
            <footer-vue></footer-vue>
        </div>
        <script src="./js/app.js"></script>
    </body>
</html>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    #app {
        display: flex;
        flex-flow: column;
        height: 100vh;
        width: 100%;
        overflow: auto;
    }
</style>
