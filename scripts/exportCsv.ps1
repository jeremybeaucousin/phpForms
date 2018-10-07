<#
.SYNOPSIS
    Permet de générer un export CSV depuis une API REST
.DESCRIPTION
    Export les données provenant d'une API au format CSV en fonction des arguments renseignés
.PARAMETER fileLocation
    Emplacement du fichier exporté
.PARAMETER searchedValue
    Titre du programme recherché
.PARAMETER searchedType
    Type du programme recherché : game, movie, series, episode
.EXAMPLE
    exportCsv.ps1 -searchedValue Interstell -searchedType movie
.NOTES
    Author: Jérémy Beaucousin
    Date:   Octo 07 , 2018
#>

param(
    [string]$fileLocation,
    [string]$searchedValue,
    [string]$searchedType
)

$jsonData = Invoke-WebRequest "http://www.omdbapi.com/?apikey=409136d8&s=${searchedValue}*&type=${searchedType}" | Select-Object -Expand Content
$data = $jsonData | ConvertFrom-Json

$csvContent = '"Title";"Year";"imdbID";"Type";"Poster"'
$csvContent += "`n"
Foreach ($result IN $data.Search) {
    $csvLine = '"{0}";"{1}";"{2}";"{3}";"{4}"' -f $result.Title, $result.Year, $result.imdbID, $result.Type, $result.Poster
    $csvLine += "`n"
    $csvContent += $csvLine
}

$csvContent  | Out-File "${fileLocation}export.csv"