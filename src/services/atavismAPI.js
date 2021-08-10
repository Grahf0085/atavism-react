export const fetchAllAdventurers = async (page) => {
  const res = await fetch('https://atavism.lhr.rocks/api/toons'); 
  const json = await res.json();
  return json.slice((page - 1) * 50, page * 50);
};

export const fetchDetails = async (name) => {
  const res = await fetch(`https://atavism.lhr.rocks/api/toon/${name}`);
  const json = await res.json();
  return json;
};

export const fetchNumberOnline = async () => {
  const res = await fetch('https://atavism.lhr.rocks/api/toons'); 
  const json = await res.json();
  return json.length;
};

export const fetchNameList = async (name, page) => {
  const res = await fetch(`https://atavism.lhr.rocks/api/toonlist/${name}`);
  const json = await res.json();
  return json.slice((page - 1) * 50, page * 50);
};
