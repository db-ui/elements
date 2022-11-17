# How to create and provide the technical icon files

We're getting these icons by the [DB Design System colleagues](https://dbsw-my.sharepoint.com/personal/maximilian_franzke_deutschebahn_com/_layouts/15/onedrive.aspx?id=%2Fteams%2FCXM%2ETeams%2DDDSTeam%2FShared%20Documents%2FDDS%20Team%2F01%2D%2DDesign%2DSystem%2F04%2D%2DFoundations%2F07%2D%2DIcons%2F04%2D%2DExchange%2DIcons%2F01%2D%2DFunctional&listurl=https%3A%2F%2Fdbsw%2Esharepoint%2Ecom%2Fteams%2FCXM%2ETeams%2DDDSTeam%2FShared%20Documents&viewid=0595d7bc%2Db96a%2D483a%2D8d53%2D87b3356ce9fc) and process the following changes:

-   Minifications with [`ImageOptim`](https://imageoptim.com/mac)
-   Adding some contents within the SVGs (these assets might get exported correctly in the future)
    -   CSS variables (replace `fill="#282D37"` by `fill="#282D37" style="fill: currentColor;fill: var(--db-icon-color, currentColor)"`)
    -   `id`-Attribute (generic `icon` id within all SVG files)
-   Afterwards the JSON files within the `source/_patterns/icons` path might need to get updated
