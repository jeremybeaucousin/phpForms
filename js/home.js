var csvContent = '';

$("#search-button").click(function () {
    var searchedValue = $("#title").val();

    $.ajax({
        url: `http://www.omdbapi.com/?apikey=409136d8&s=${searchedValue}*`,
        context: document.body
    }).done(function (data) {
        var results = data["Search"];
        if (results) {
            resultsContent = $("#results");
            resultsContent.empty();
            csvContent = '"Title";"Year";"imdbID";"Type";"Poster"\n';
            results.forEach(function (result) {
                var title = result["Title"];
                var year = result["Year"];
                var imdbId = result["imdbID"];
                var type = result["Type"];
                var poster = result["Poster"];
                resultsContent.append(
                    `<tr>
                    <td> ${title}</td>
                    <td> ${year}</td>
                    <td> ${imdbId}</td>
                    <td> ${type}</td>
                    <td class="text-center"> <img src="${poster}" alt="Poster" height="50" width="50"></td>
                </tr>`)
                csvContent += `"${title}";"${year}";"${imdbId}";"${type}";"${poster}"\n`;
            });
        } else {
            alert("Aucun résultat trouvé");
        }
    });
});


$("#export-button").click(function () {
    var filename = "export.csv";
    var blob = new Blob([csvContent], { type: 'text/csv' });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
});