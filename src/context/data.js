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
    symptoms: [
      {
        id: 401,
        type: 'Cognitive',
        description: 'lack of concentration, racing thoughts, or unwanted thoughts'
      },
      {
        id: 402,
        type: 'Behavioural',
        description: 'hypervigilance, irritability, or restlessness'
      },
      {
        id: 403,
        type: 'Whole Body',
        description: 'fatigue or sweating'
      },
      {
        id: 404,
        type: 'Common',
        description: 'anxiety, excessive worry, angor animi, fear, insomnia, nausea, palpitations, or trembling'
      }
    ],
    treatment: 'Treatment includes counselling or medication, including antidepressants.'
  },
  {
    id: 102,
    title: 'Clinical depression',
    description: 'Also known as major depression, a mental health disorder characterised by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life. The persistent feeling of sadness or loss of interest that characterises major depression can lead to a range of behavioural and physical symptoms. Depression can also be associated with thoughts of suicide. Depression can also be associated with thoughts of suicide. The good news is that with the right treatment and support, someone with depression can make a full recovery.',
    symptoms: [
      {
        id: 301,
        type: 'Mood',
        description: 'anxiety, apathy, general discontent, guilt, hopelessness, loss of interest, loss of interest or pleasure in activities, mood swings, or sadness'
      },
      {
        id: 302,
        type: 'Behavioural',
        description: ' agitation, excessive crying, irritability, restlessness, or social isolation'
      },
      {
        id: 303,
        type: 'Cognitive',
        description: 'lack of concentration, slowness in activity, or thoughts of suicide'
      },
      {
        id: 304,
        type: 'Weight',
        description: 'weight gain or weight loss'
      },
      {
        id: 305,
        type: 'Whole body',
        description: 'excessive hunger, fatigue, or loss of appetite'
      },
      {
        id: 306,
        type: 'Sleep',
        description: 'early awakening, excess sleepiness, insomnia, or restless sleep'
      },
      {
        id: 307,
        type: 'Common',
        description: 'poor appetite or rumination'
      }
    ],
    treatment: 'The mainstay of treatment is usually medication, talk therapy or a combination of the two. I'
  },
  {
    id: 103,
    title: 'Bipolar disorder',
    description: `A disorder associated with episodes of mood swings ranging from depressive lows to manic highs.
    The exact cause of bipolar disorder isn’t known, but a combination of genetics, environment and altered brain structure and chemistry may play a role.`,
    symptoms: [
      {
        id: 201,
        type: 'Mood',
        description: 'mood swings, sadness, elevated mood, anger, anxiety, apathy, apprehension, euphoria, general discontent, guilt, hopelessness, loss of interest, or loss of interest or pleasure in activities'
      },
      {
        id: 202,
        type: 'Cognitive',
        description: 'unwanted thoughts, delusion, lack of concentration, racing thoughts, slowness in activity, or false belief of superiority'
      },
      {
        id: 203,
        type: 'Psychological',
        description: 'depression, manic episode, agitated depression, or paranoia'
      },
      {
        id: 204,
        type: 'Behavioural',
        description: 'irritability, risk-taking behaviours, disorganised behaviour, aggression, agitation, crying, excess desire for sex, hyperactivity, impulsivity, restlessness, or self-harm'
      },
      {
        id: 205,
        type: 'Sleep',
        description: 'difficulty falling asleep or excess sleepiness'
      },
      {
        id: 206,
        type: 'Weight',
        description: 'weight gain or weight loss'
      },
      {
        id: 207,
        type: 'Common',
        description: 'fatigue or pressure of speech'
      }
    ],
    treatment: 'Treatment is usually lifelong and often involves a combination of medications and psychotherapy.'
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
