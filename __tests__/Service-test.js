import axios from 'axios';
const API = 'https://api.github.com/users';

it('Should fetch github repos', async () => {
  const req = await axios.get(`${API}/fhminato/repos`);
  const result = req.data[0];
  expect(result).not.toBeNull();
});

it('Should fetch github repos starred', async () => {
  const req = await axios.get(`${API}/fhminato/starred`);
  const result = req.data[0];
  expect(result).not.toBeNull();
});
