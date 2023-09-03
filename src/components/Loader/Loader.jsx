import { Audio } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader_styled';

export const Loader = () => {
    return (
      <LoaderSpinner>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          // wrapperClass
        />
      </LoaderSpinner>
    );
}