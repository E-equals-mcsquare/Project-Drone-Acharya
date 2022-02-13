const express = require('express')
const router = express.Router()

router.get('/getStockyards', (req, res) => {
    res.send({
        data: [{
            stockyardid: 1,
            stockyardname: 'Stockyard Yudhisthir',
            stockyardcoord: '((731741.878437889,5869095.45911568),(731737.268721766,5869069.1179094),(731735.293136319,5869062.53260783),(731754.719780973,5869029.60609999),(731808.389973689,5869055.94730627),(731809.707039027,5869066.15453123),(731793.902330334,5869099.08103908),(731741.878437889,5869095.45911568))'
        }, {
            stockyardid: 2,
            stockyardname: 'Stockyard Abhimanyu',
            stockyardcoord: '((731809.893918773,5868957.73008061),(731852.920049463,5868985.11034447),(731862.046816516,5868984.67574362),(731865.958273899,5868979.2431501),(731873.346604395,5868970.98560547),(731883.994491,5868974.67977487),(731911.809376428,5868891.01783059),(731897.032715436,5868885.15063623),(731809.893918773,5868957.73008061))'
        }, {
            stockyardid: 3,
            stockyardname: 'Stockyard Sahadev',
            stockyardcoord: '((731776.508746378,5869022.10780668),(731767.966815438,5869021.23913265),(731764.057801624,5869024.71381773),(731746.53960549,5869015.8823343),(731747.987390021,5869008.20907187),(731761.017445273,5868999.8119227),(731774.481845826,5868989.82221275),(731783.023776765,5868985.04452491),(731791.710483949,5868986.05796966),(731795.329945275,5868988.80876248),(731795.040381742,5868997.35068789),(731793.013492236,5869006.18217684),(731787.656682845,5869014.43454977),(731781.865544723,5869018.77790336),(731776.508746378,5869022.10780668))'
        }, {
            stockyardid: 4,
            stockyardname: 'Stockyard Nakul',
            stockyardcoord: '((731635.113703538,5869097.33734298),(731628.271818554,5869086.2600187),(731653.195805945,5869066.71179098),(731672.418216302,5869060.5215283),(731692.292248957,5869061.82473561),(731707.605024955,5869081.86166762),(731711.514659314,5869099.78087067),(731692.455148317,5869123.56454079),(731679.423000647,5869128.94029424),(731644.073305062,5869100.5953799),(731635.113703538,5869097.33734298))'
        }, {
            stockyardid: 5,
            stockyardname: 'Stockyard Arjun',
            stockyardcoord: '((731831.051909774,5869142.9058205),(731777.459744918,5869133.63459872),(731786.05260397,5869106.72546303),(731813.187872074,5869070.77122934),(731832.182545945,5869065.79643709),(731848.915947474,5869085.46949956),(731838.287974367,5869139.06165579),(731831.051909774,5869142.9058205))'
        }, {
            stockyardid: 6,
            stockyardname: 'Stockyard Bheem',
            stockyardcoord: '((731791.168714415,5869229.8341831),(731760.666331109,5869234.84202956),(731747.236175322,5869229.37892196),(731733.806019535,5869208.43698781),(731726.294249847,5869187.03979251),(731769.999145346,5869140.14806905),(731832.369704051,5869150.16377933),(731825.085525857,5869192.95816993),(731821.443471493,5869197.51076393),(731808.92383798,5869215.72113995),(731800.046258831,5869227.5578861),(731791.168714415,5869229.8341831))'
        }]
    })
})

module.exports = router