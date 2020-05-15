import img1 from './images/awareness.svg';
import img2 from './images/specialist.svg';
import img3 from './images/forum.svg';
import img4 from './images/appointment.svg';

const mentalDisorders = [
  {
    id: 101,
    title: 'Anxiety disorder',
    description: 'A mental health disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one\'s daily activities.',
    diagnosis: 'Usually self-diagnosable',
    symptoms: 'Symptoms include stress that\'s out of proportion to the impact of the event, inability to set aside a worry and restlessness.',
    treatment: 'Treatment includes counselling or medication, including antidepressants.'
  },
  {
    id: 101,
    title: 'Clinical depression',
    description: 'Also known as major depression, a mental health disorder characterised by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life. The persistent feeling of sadness or loss of interest that characterises major depression can lead to a range of behavioural and physical symptoms. Depression can also be associated with thoughts of suicide. Depression can also be associated with thoughts of suicide.',
    symptoms: 'Symptoms include stress that\'s out of proportion to the impact of the event, inability to set aside a worry and restlessness.',
    treatment: 'The mainstay of treatment is usually medication, talk therapy or a combination of the two. I'
  }
];

const services = [
  {
    id: 1,
    title: 'Create awarness',
    description:
      'Educate the community on mental health and change their view and how they approach this topic of mental health.',
    image: img1
  },
  {
    id: 2,
    title: 'Specialist plattform',
    description:
      'A platform where specialist can list their practices hence patients can view their profile and book appointments online',
    image: img2
  },
  {
    id: 3,
    title: 'Forum',
    description:
      'A forum where individuals can share posts/questions , get answers from specialist and view other peoples questions and answers.',
    image: img3
  },
  {
    id: 4,
    title: 'Book appointments',
    description: 'Patients can book appointments online after having access to diffrent specialist profiles.',
    image: img4
  }
];

export { services, mentalDisorders };
