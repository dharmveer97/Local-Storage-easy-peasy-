import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const useContactPost = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submitContactForm = async (formData) => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        await Swal.fire({
          icon: 'success',
          title: 'Submit Successfully',
          timer: 1500,
          showConfirmButton: false,
        });
        setLoading(false);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { loading, submitContactForm };
};

export default useContactPost;
