<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>        
        <div id="displayer" categories="{{ $categories }}"></div>
        
        <script src="{{asset('js/app.js')}}" ></script>                
    </body>
</html>