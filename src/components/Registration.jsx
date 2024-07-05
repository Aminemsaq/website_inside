import { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        typeOfTraining: 'Gamir Academy (2000 Dhs)',
        firstName: '',
        lastName: '',
        phone: '',
        city: '',
        email: '',
      },
      isRegistered: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: { ...this.state.formData, [name]: value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://sheetdb.io/api/v1/o7mjnmrsh7bgx',
        this.state.formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('Form submitted successfully:', response.data);

      // Update state to trigger redirection
      this.setState({ isRegistered: true });

      // Optionally reset the form after successful submission
      this.setState({
        formData: {
          typeOfTraining: 'Gamir Academy coaching (2000 Dhs)',
          firstName: '',
          lastName: '',
          phone: '',
          city: '',
          email: '',
        },
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state or display error message to user
    }
  };

  render() {
    if (this.state.isRegistered) {
      return <Navigate to="/ThankYouPage" />;
    }

    return (
      <div className="bg-slate-950 min-h-screen flex justify-center items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">REJOIGNEZ NOS PLANS AUJOURD’HUI</h2>
            <p className="text-center text-gray-600 mb-4">Et transformez votre vie !</p>
            <form onSubmit={this.handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="typeOfTraining" className="block text-sm font-medium text-gray-700">
                  Sélectionnez le type de formation *
                </label>
                <select
                  name="typeOfTraining"
                  id="typeOfTraining"
                  value={this.state.formData.typeOfTraining}
                  onChange={this.handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="FM ACADEMY COACHING (2900 Dhs)">Gamir Academy coaching (2000 Dhs)</option>
                </select>
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={this.state.formData.firstName}
                  onChange={this.handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Nom *
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={this.state.formData.lastName}
                  onChange={this.handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={this.state.formData.phone}
                  onChange={this.handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Ville *
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.formData.city}
                  onChange={this.handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
