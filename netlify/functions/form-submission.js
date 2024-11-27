exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
      const formData = JSON.parse(event.body);
      console.log('Form Data Received:', formData);
  
      // Here you can perform further logic, e.g., send an email, store data, etc.
      // For example, to just log the form data:
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Form submission received successfully!',
          formData: formData
        })
      };
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({
          message: 'Method Not Allowed'
        })
      };
    }
  };
  