const express = require('express')
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors);


let jsonData = require("./db.json");

app.get('/jobs', (req, res) => {
    data = jsonData["jobs"];
    const resp = {
        success: true,
        data: data
    };
    res.status(200).send(resp);
});


app.get('/jobs/:id', (req, res) => {
    let id = req.params.id;
    data = jsonData['jobs'][id];
    const resp = {
        success: true,
        data: data
    };
    res.status(200).send(resp);

});

app.put('/jobs/:id', (req, res) => {
    let data = jsonData['jobs']
    const id = req.params.id;
    console.log(req.body);
    data[id]['job_number'] = req.body.job_number;
    data[id]['job_title'] = req.body.job_title;
    data[id]['job_start_date'] = req.body.job_start_date;
    data[id]['job_close_date'] = req.body.job_close_date;
    data[id]['experience_required'] = req.body.experience_required;
    data[id]['number_of_openingsr'] = req.body.number_of_openings;
    data[id]['job_notes'] = req.body.job_notes;

    // data = jsonData[id, job_number, job_title, job_start_date, job_close_date, experience_required, number_of_openings, job_notes];
    const resp = {
        success: true,
        data: data[id]
    };
    res.status(200).send(resp);
});

app.delete('/jobs/:id', (req, res) => {
    const id = req.params.id;
    data = jsonData['jobs'];
    data.splice(id, 1);
    const resp = {
        success: true,
        message: 'Deleted',
        data: data
    };
    res.status(200).send(resp);
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});