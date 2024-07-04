import { Box } from './Box';
import image1 from '../../assets/Work1.png';
import image2 from '../../assets/Work2.png';
import image3 from '../../assets/Work3.png';
import image4 from '../../assets/Work4.png';
import image5 from '../../assets/Work5.png';
import image6 from '../../assets/Work6.png';

const FunctionsTab: React.FC = () => {
  const boxes = [
    { imageUrl: image1, text: 'Select Your Role and Sign Up', id: 1 },
    { imageUrl: image2, text: 'Buyers Post Your Requirements', id: 2 },
    { imageUrl: image3, text: 'Review, Select, and Contact the Best Suppliers', id: 3 },
    { imageUrl: image4, text: 'Suppliers Complete your profile and get notified for opportunities', id: 4 },
    { imageUrl: image5, text: 'Contact to Buyers and Share your Quote for the service', id: 5 },
    { imageUrl: image6, text: 'Both the Parties can Connect and Make Business Leave a Feedback', id: 6 },
  ];

  return (
    <div className='p-8 py-12'>
    <div className="max-w-7xl mx-auto space-y-8">
      <h3 className="text-center font-bold text-4xl">How it works?</h3>
      <p className="font-medium text-lg leading-6 md:mx-9">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {boxes.map((box, index) => (
          <Box key={index} imageUrl={box.imageUrl} text={box.text} id={box.id} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FunctionsTab;
