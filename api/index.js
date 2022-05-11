
require('./database/db');
const express = require("express");
const faculty = require('./routers/facultyrouter');
const librarian = require('./routers/librarianrouter');
const mentor = require('./routers/mentorrouter');
const stationer = require('./routers/stationerrouter');
const student = require('./routers/studentrouter');
const technicalhead = require('./routers/technicalheadrouter');
const technology = require('./routers/technologyrouter');
const user = require('./routers/usersrouter');

const cors = require("cors");
var app = express();

app.use(cors({origin:'http://localhost:4200'}));
app.use(express.json({limit: '50mb'}));
app.use('/faculty',faculty);
app.use('/librarian',librarian);
app.use('/mentor',mentor);
app.use('/stationer',stationer);
app.use('/student',student);
app.use('/technicalhead',technicalhead);
app.use('/technology',technology);
app.use('/users',user)
app.listen(4000,()=> console.log("server connected"));