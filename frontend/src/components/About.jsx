import SAbout from './styled/SAbout';
import { SPageTitle } from './styled/models';

export default function About() {
  return (
    <SAbout>
      <SPageTitle>#about</SPageTitle>
      <div className='content'>
        <p>
          Hi, I'm <em className='big'>Kévin</em>
        </p>
      </div>
    </SAbout>
  );
}
