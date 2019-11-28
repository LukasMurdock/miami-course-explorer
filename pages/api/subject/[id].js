export default (req, res) => {
  const {
    query: { id }
  } = req;

  res.setHeader('Content-Type', 'application/json');

  fetch(
    `http://ws.miamioh.edu/courseSectionV2/202020.json?campusCode=O&courseSubjectCode=${id}`
  )
    .then(r => r.json())
    .then(data => {
      res.statusCode = 200;
      res.end(JSON.stringify({ ...data })).catch(err => {
        console.log(err);
        res.statusCode = 500;
      });
    });
};
