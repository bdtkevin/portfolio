import { useParams } from 'react-router-dom';
import { request } from '../utilities/';
import SProject from './styled/SProject';
import { SPageTitle } from './styled/models';
import { useEffect, useState } from 'react';

export default function Project() {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  const getProject = async () => {
    try {
      const { data } = await request({
        method: 'get',
        url: `/projects/${name}`,
      });
      setProject(data);
    } catch (err) {}
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line
  }, [name]);

  return (
    <SProject>
      <SPageTitle>#{name}</SPageTitle>
      {project ? <p>toto</p> : <p>loading</p>}
    </SProject>
  );
}
