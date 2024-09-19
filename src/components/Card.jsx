import PropTypes from 'prop-types';

const Card = ({ imgSrc, name, memberType, university }) => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex flex-col items-center">
        <img
          src={imgSrc}
          alt={name}
          className="w-24 h-24 rounded-full"
        />
        <div className="text-center mt-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600">{memberType}</p>
          </div>
          <p className="text-gray-500 mt-2">
            {university}
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-500"
          >
            <img
              src="/external/iconlinkedin8565-g6kj.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <img
            src="/external/icondribble8565-hjz.svg"
            alt="Dribble"
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  memberType: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
};

export default Card;

  
