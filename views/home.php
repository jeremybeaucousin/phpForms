<!DOCTYPE html>
<html>
    <?php include 'head.php';?>

    <body class="container-fluid">
        <div class="jumbotron">
            <h1>Bienvenue sur mon projet !</h1>
            <p class="lead">Un petit formulaire presentant les données d'un api.</p>
            <hr>
            <p>Pour fonctionner, nous sommes connecter à OMDB : http://www.omdbapi.com/.</p>
        </div>

        <form>
            <div class="form-group">
                <label for="title">Search title</label>
                <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Enter Title">
            </div>

            <input type="button" class="btn btn-primary" id="search-button" value="Rechercher">
            <input type="button" class="btn btn-success float-right" id="export-button" value="Exporter en csv">
        </form> 

        <br/>

        <table class="table">
            <thead class="thead-dark text-center">
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>imdbID</th>
                    <th>Type</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody id="results">
            </tbody>
        </table>

    <script src="js/home.js"></script>


    </body>
</html>