const keys = require('../../config/keys');

module.exports = survey =>{

    return `
        <html>
            <body>
                <div class="container" style="text-align: center;">
                    <h3>¡Nos interesa saber tu opinón!</h3>
                    <p>Por favor, <b>contesta</b> la siguiente pregunta:</p>
                    <p>${survey.body}</p>

                    <div class="container">
                        <a href="${ keys.redirectDomain }/api/surveys/${survey.id}/yes">Sí</a>
                    </div>

                    <div class="container">
                        <a href="${ keys.redirectDomain }/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>

            </body>
        </html>
    `;

};