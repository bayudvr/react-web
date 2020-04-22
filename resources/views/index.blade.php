<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>React - Web</title>

    @include('plugin.plugin-css')
</head>
<body id="page-top">
    <div id="navbar"></div>
    @include('plugin.plugin-js')
</body>
</html>