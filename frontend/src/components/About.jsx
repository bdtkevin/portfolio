import SAbout from './styled/SAbout';
import { SPageTitle } from './styled/models';

export default function About() {
  return (
    <SAbout>
      <SPageTitle>#about</SPageTitle>
      <div className='content'>
        <h2 className='about-name'>
          Hi, I'm Kévin
          <span role='img' className='contact-wave'>
            👋
          </span>
        </h2>
      </div>
    </SAbout>
  );
}
