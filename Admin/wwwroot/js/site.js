// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("document").ready(function () {

    var page = document.URL.split("/");
    page = page[document.URL.split("/").length - 1];
    if (page == "") {
        $("#navPageHome").addClass("active");
    }
    else {
        $(".nav-link").removeClass("active");
        $("#navPage" + page).addClass("active");
    }
})
