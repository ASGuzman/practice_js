// Creación de una instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Definición de la URL del archivo JSON
var url = "./health_article.json";

// Configuración de la solicitud GET
xhr.open("GET", url, true);

// Especificación del tipo de respuesta
xhr.responseType = "json";

// Se define una función onload que se ejecutará cuando la solicitud termine con éxito. Esta función procesará los datos obtenidos.
xhr.onload = function() {
    if (xhr.status === 200) { // Comprueba si el estado de la respuesta es "OK"
        // accede a la propiedad articles del objeto JSON de la respuesta.
        var articles = xhr.response.articles;
        // obtiene un elemento del DOM con el ID articles en el que se insertarán los datos.
        var articlesDiv = document.getElementById("articles");

        //Se utiliza un forEach para recorrer cada artículo en el arreglo articles
        articles.forEach(function(article) {
            var articleDiv = document.createElement("div");
            articleDiv.classList.add("article");

            var title = document.createElement("h2");
            title.textContent = article.title;

            var description = document.createElement("p");
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement("ul");

            // itera sobre cada forma (way) para crear un elemento li en la lista ul.
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement("li");
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement("h3");
            benefitsHeader.textContent = "Benefits: ";

            var benefitsList = document.createElement("ul");

            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement("li");
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error("Error loading articles:", xhr.status);
    }
};

// Envío de la solicitud
xhr.send();
