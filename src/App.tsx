import React, { useState } from 'react';
import { Leaf, Users, ShoppingCart, Package, MessageCircle, Truck, CheckCircle, ArrowLeft, CreditCard, Banknote, Smartphone, Menu, X, Phone, Mail, MapPin, Sprout, ArrowRight, Store, Check, TrendingUp } from 'lucide-react';

type Screen = 'home' | 'farmer-info' | 'farmer-packs' | 'farmer-signup' | 'farmer-confirmation' | 'consumer-info' | 'consumer-signup' | 'consumer-confirmation' | 'consumer-shop' | 'contact';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    setCurrentScreen(previousScreen);
  };

  const Navbar = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentScreen('home')}>
            <Leaf className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-green-800">GreenHouse</h1>
              <p className="text-xs text-green-600 italic">Cultiver, Connecter et Gagner</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigateTo('farmer-info')}
              className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Agriculteur
            </button>
            <button 
              onClick={() => navigateTo('consumer-info')}
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <Users className="w-5 h-5 mr-2" />
              Consommateur
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contactez-nous
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <button 
              onClick={() => {
                navigateTo('farmer-info');
                setMobileMenuOpen(false);
              }}
              className="flex items-center w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Agriculteur
            </button>
            <button 
              onClick={() => {
                navigateTo('consumer-info');
                setMobileMenuOpen(false);
              }}
              className="flex items-center w-full text-left py-2 text-gray-700 hover:text-blue-600"
            >
              <Users className="w-5 h-5 mr-2" />
              Consommateur
            </button>
            <button
              onClick={() => {
                navigateTo('contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 bg-green-600 text-white hover:bg-green-700"
            >
              Contactez-nous
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const BackButton = () => (
    currentScreen !== 'home' && (
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Retour</span>
          </button>
        </div>
      </div>
    )
  );

  const HomeScreen = () => (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Révolutionnez votre approvisionnement en fruits et légumes
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Avec GreenHouse, les consommateurs s'approvisionnent directement auprès d'agriculteurs urbains au prix le plus compétitif. Le tout en quelques clics.
                </p>
                <button
                  onClick={() => navigateTo('contact')}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Contactez-nous 🎧
                </button>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <Truck className="w-20 h-20 text-green-600 mx-auto mb-4" />
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Sprout className="w-6 h-6 text-green-600" />
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <ShoppingCart className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">Producteur → Consommateur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revolution Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  GreenHouse révolutionne la chaîne d'approvisionnement des F&L.
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Grâce à notre réseau d'agriculteurs urbains et à notre technologie de pointe, nous sommes en passe de résoudre un des problèmes les plus complexes en Afrique, caractérisé par des inefficacités logistiques, des intermédiaires multiples qui contribuent principalement à l'augmentation des prix et un contrôle de qualité et d'hygiène limité.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl">
                  <div className="text-center">
                    <h3 className="text-gray-800 font-bold text-xl mb-6">Avec GreenHouse</h3>
                    <div className="flex items-center justify-center space-x-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                          <Sprout className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Agriculteur</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-green-600" />
                      <div className="w-16 h-16 border-2 border-green-600 rounded-full flex items-center justify-center">
                        <Leaf className="w-8 h-8 text-green-600" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-green-600" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                          <Store className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Consommateur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Avant GreenHouse */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Avant GreenHouse
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                            <Sprout className="w-6 h-6 text-gray-600" />
                          </div>
                          <p className="text-xs text-gray-600">Agriculteur</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                            <Users className="w-6 h-6 text-gray-600" />
                          </div>
                          <p className="text-xs text-gray-600">Courtier(s)</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                            <ShoppingCart className="w-6 h-6 text-gray-600" />
                          </div>
                          <p className="text-xs text-gray-600">Marché(s) de gros</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                            <Truck className="w-6 h-6 text-gray-600" />
                          </div>
                          <p className="text-xs text-gray-600">Distributeur</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                            <Store className="w-6 h-6 text-gray-600" />
                          </div>
                          <p className="text-xs text-gray-600">Commerçant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <X className="w-4 h-4 text-red-500 mr-2" />
                      <span>Multiples intermédiaires</span>
                    </div>
                    <div className="flex items-center">
                      <X className="w-4 h-4 text-red-500 mr-2" />
                      <span>Prix élevés pour le consommateur</span>
                    </div>
                    <div className="flex items-center">
                      <X className="w-4 h-4 text-red-500 mr-2" />
                      <span>Revenus faibles pour l'agriculteur</span>
                    </div>
                    <div className="flex items-center">
                      <X className="w-4 h-4 text-red-500 mr-2" />
                      <span>Qualité et fraîcheur compromises</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avec GreenHouse */}
              <div className="bg-green-50 p-8 rounded-2xl shadow-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                  Avec GreenHouse
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                          <Sprout className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-green-800 font-semibold">Agriculteur</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <ArrowRight className="w-8 h-8 text-green-600 mb-2" />
                        <div className="w-12 h-12 border-2 border-green-600 rounded-full flex items-center justify-center">
                          <Leaf className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="text-xs text-green-600 mt-1">GreenHouse</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-green-600" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                          <Store className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-green-800 font-semibold">Consommateur</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-green-700">
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span>Circuit court direct</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span>Prix justes et compétitifs</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span>90% des revenus pour l'agriculteur</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span>Fraîcheur et qualité garanties</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span>Agriculture urbaine durable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Pourquoi s'approvisionner avec GreenHouse ?
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Pour les agriculteurs */}
              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sprout className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Pour les agriculteurs</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">90% de revenus en plus</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Paiement en 24 heures</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Demande constante</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Formation et accompagnement</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Pesée transparente</span>
                  </div>
                </div>
              </div>

              {/* Pour les commerçants */}
              <div className="text-center p-8 rounded-2xl bg-green-600 text-white">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Store className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Pour les consommateurs</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3" />
                    <span>Prix compétitifs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3" />
                    <span>Qualité premium</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3" />
                    <span>Livraison porte-à-porte</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3" />
                    <span>Gain de temps et commodité</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3" />
                    <span>Impact social positif</span>
                  </div>
                </div>
              </div>

              {/* Pour les consommateurs finaux */}
              
              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {/* <ShoppingCart className="w-10 h-10 text-blue-600" /> */}
                </div>
                {/* <h3 className="text-2xl font-bold text-gray-800 mb-6">Pour les familles</h3> */}
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    {/* <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Normes d'hygiène élevées</span> */}
                  </div>
                  <div className="flex items-center">
                    {/* <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Qualité premium</span> */}
                  </div>
                  <div className="flex items-center">
                    {/* <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Produits 100% traçables</span> */}
                  </div>
                  <div className="flex items-center">
                    {/* <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Impact social positif</span> */}
                  </div>
                  <div className="flex items-center">
                    {/* <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600">Agriculture locale</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Rejoignez la révolution GreenHouse dès aujourd'hui !
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigateTo('farmer-info')}
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Devenir Agriculteur Partenaire
              </button>
              <button
                onClick={() => navigateTo('consumer-info')}
                className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-semibold"
              >
                Commencer à Acheter Local
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const FarmerInfoScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Agriculture urbaine" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />
              <div className="flex items-center justify-center mb-6">
                <Leaf className="w-16 h-16 text-green-600 mr-4" />
                <h1 className="text-4xl font-bold text-green-800">Espace Agriculteurs</h1>
              </div>
              <p className="text-xl text-gray-600">Transformez vos espaces urbains en source de revenus</p>
            </div>

            {/* Description des avantages */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🌱 Pourquoi devenir agriculteur partenaire ?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">🛍 Vente de vos produits</h3>
                      <p className="text-gray-600">Vos produits seront vendus dans notre vitrine en ligne avec une visibilité maximale</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">💰 Commission avantageuse</h3>
                      <p className="text-gray-600">GreenHouse applique seulement 10% de commission sur chaque vente</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">🎯 Vous gardez 90% des gains</h3>
                      <p className="text-gray-600">La majorité des revenus vous revient directement</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">🚫 Aucun abonnement</h3>
                      <p className="text-gray-600">Pas de frais cachés ni d'abonnement mensuel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">🏠 Tous types d'espaces</h3>
                      <p className="text-gray-600">Terrasse, balcon, cour, jardin, toit - nous nous adaptons à votre espace</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">📈 Revenus réguliers</h3>
                      <p className="text-gray-600">Générez des revenus constants grâce à la demande locale</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => navigateTo('farmer-packs')}
                  className="bg-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors shadow-lg mr-4"
                >
                  Je veux devenir agriculteur partenaire
                </button>
                <button 
                  onClick={() => navigateTo('farmer-signup')}
                  className="bg-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Créer mon compte directement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const FarmerPacksScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Systèmes de culture" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl font-bold text-green-800 mb-4">Choisissez votre pack</h1>
              <p className="text-xl text-gray-600">Sélectionnez l'offre qui correspond le mieux à vos besoins</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pack Premium */}
              <div className="border-4 border-green-500 rounded-2xl p-8 relative bg-gradient-to-br from-green-50 to-green-100">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-6 py-2 rounded-full font-bold">RECOMMANDÉ</span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Pack Premium</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4"></div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Installation complète du système de culture</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Formation et accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Accès à la vitrine en ligne</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Commission de 5-7% seulement</span>
                  </div>
                  <div className="flex items-center">
                    {/* <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> */}
                    {/* <span className="text-gray-700 font-semibold">Vous gardez 93% de vos gains</span> */}
                  </div>
                </div>

                <button 
                  onClick={() => navigateTo('farmer-signup')}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-green-700 transition-colors"
                >
                  Choisir Pack Premium
                </button>
              </div>

              {/* Pack Starter */}
              <div className="border-2 border-blue-300 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Pack Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4"></div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Installation complète du système</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Accès à la vitrine en ligne</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Commission à discuter selon vos ventes</span>
                  </div>
                  <div className="flex items-center opacity-50">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-gray-400">Formation personnalisée non incluse</span>
                  </div>
                  <div className="flex items-center opacity-50">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-gray-400">Accompagnement limité</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigateTo('farmer-signup')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                >
                  Choisir Pack Starter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ConsumerInfoScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Consommateurs" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />
              <div className="flex items-center justify-center mb-6">
                <Users className="w-16 h-16 text-blue-600 mr-4" />
                <h1 className="text-4xl font-bold text-blue-800">Espace Consommateurs</h1>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🥕 Mangez sain, local et solidaire</h2>
              <p className="text-xl text-gray-600">Découvrez tous les avantages de consommer local avec GreenHouse</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choisissez comment vous souhaitez acheter :</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-green-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <ShoppingCart className="w-12 h-12 text-green-600 mr-4" />
                    <h4 className="text-2xl font-bold text-gray-800">🧺 Paniers hebdomadaires personnalisés</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Recevez chaque semaine une sélection de produits frais cultivés dans votre quartier</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">✅ Légumes de saison</p>
                    <p className="text-sm text-gray-600">✅ Herbes aromatiques</p>
                    <p className="text-sm text-gray-600">✅ Fruits selon disponibilité</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Package className="w-12 h-12 text-blue-600 mr-4" />
                    <h4 className="text-2xl font-bold text-gray-800">📦 Achats en gros</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Pour familles nombreuses, restaurants, collectivités</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">✅ Tarifs préférentiels</p>
                    <p className="text-sm text-gray-600">✅ Commandes personnalisées</p>
                    <p className="text-sm text-gray-600">✅ Livraison gratuite dès 50kg</p>
                  </div>
                </div>
              </div>

              {/* Avantages */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">👍 Fraîcheur garantie</h4>
                  <p className="text-sm text-gray-600">Récolte du jour, livraison immédiate</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Truck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">📦 Livraison possible</h4>
                  <p className="text-sm text-gray-600">À domicile ou points de retrait</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">💬 Accès direct à l'agriculteur</h4>
                  <p className="text-sm text-gray-600">Chat client-producteur intégré</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <button 
                  onClick={() => navigateTo('consumer-signup')}
                  className="bg-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  Créer mon compte
                </button>
                <button 
                  onClick={() => navigateTo('consumer-shop')}
                  className="bg-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
                >
                  Voir les paniers disponibles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const FarmerBenefitsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => setCurrentScreen('home')}
          className="flex items-center text-green-600 hover:text-green-700 mb-8 text-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </button>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-16 h-16 text-green-600 mr-4" />
              <h1 className="text-4xl font-bold text-green-800">Espace Agriculteurs</h1>
            </div>
            <p className="text-xl text-gray-600">Découvrez tout ce que vous allez gagner avec GreenHouse</p>
          </div>

          {/* Section gains financiers */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">💰 Vos Gains avec GreenHouse</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">🛍 Vente de vos produits</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">✅ Vos produits seront vendus dans notre vitrine en ligne</p>
                  <p className="text-gray-700">✅ GreenHouse applique une commission de 5-7% sur chaque vente</p>
                  <p className="text-gray-700 font-bold text-lg text-green-700">✅ Vous gardez 90% des gains</p>
                  <p className="text-gray-700">✅ Aucun abonnement ni frais cachés</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">📈 Revenus Estimés</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Revenus mensuels moyens:</span>
                    <span className="font-bold text-green-600">25,000 - 50,000 MRO</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Retour sur investissement:</span>
                    <span className="font-bold text-blue-600">3-6 mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Votre part des ventes:</span>
                    <span className="font-bold text-green-600">90%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Choix des packs */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pack Premium */}
              <div className="border-4 border-green-500 rounded-2xl p-8 relative bg-gradient-to-br from-green-50 to-green-100">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-6 py-2 rounded-full font-bold">RECOMMANDÉ</span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Pack Premium</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4"></div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Installation complète du système</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Formation et accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Accès vitrine en ligne (commission 10%)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-semibold">Vous gardez 90% des gains</span>
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentScreen('farmer-signup')}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-green-700 transition-colors"
                >
                  Choisir Pack Premium
                </button>
              </div>

              {/* Pack Starter */}
              <div className="border-2 border-blue-300 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Pack Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4"> MRU</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Installation complète du système</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Accès vitrine en ligne</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Commission à discuter</span>
                  </div>
                  <div className="flex items-center opacity-50">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-gray-400">Formation personnalisée</span>
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentScreen('farmer-signup')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                >
                  Choisir Pack Starter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConsumerBenefitsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => setCurrentScreen('home')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 text-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </button>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-blue-600 mr-4" />
              <h1 className="text-4xl font-bold text-blue-800">Espace Consommateurs</h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🥕 Mangez sain, local et solidaire</h2>
            <p className="text-xl text-gray-600">Découvrez tous les avantages de consommer local avec GreenHouse</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choisissez comment vous souhaitez acheter :</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-green-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="w-12 h-12 text-green-600 mr-4" />
                  <h4 className="text-2xl font-bold text-gray-800">🧺 Paniers hebdomadaires personnalisés</h4>
                </div>
                <p className="text-gray-700 mb-4">Recevez chaque semaine une sélection de produits frais cultivés dans votre quartier</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">✅ Légumes de saison</p>
                  <p className="text-sm text-gray-600">✅ Herbes aromatiques</p>
                  <p className="text-sm text-gray-600">✅ Fruits selon disponibilité</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Package className="w-12 h-12 text-blue-600 mr-4" />
                  <h4 className="text-2xl font-bold text-gray-800">📦 Achats en gros</h4>
                </div>
                <p className="text-gray-700 mb-4">Pour familles nombreuses, restaurants, collectivités</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">✅ Tarifs préférentiels</p>
                  <p className="text-sm text-gray-600">✅ Commandes personnalisées</p>
                  <p className="text-sm text-gray-600">✅ Livraison gratuite dès 50kg</p>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">👍 Fraîcheur garantie</h4>
                <p className="text-sm text-gray-600">Récolte du jour, livraison immédiate</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Truck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">📦 Livraison possible</h4>
                <p className="text-sm text-gray-600">À domicile ou points de retrait</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">💬 Accès direct à l'agriculteur</h4>
                <p className="text-sm text-gray-600">Chat client-producteur intégré</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <button 
                onClick={() => setCurrentScreen('consumer-signup')}
                className="bg-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Créer mon compte
              </button>
              <button 
                onClick={() => setCurrentScreen('consumer-shop')}
                className="bg-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
              >
                Voir les paniers disponibles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FarmerSignupScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Inscription agriculteur" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
              />
              <div className="flex items-center justify-center mb-4">
                <Leaf className="w-12 h-12 text-green-600 mr-3" />
                <h1 className="text-3xl font-bold text-green-800">Créer votre compte agriculteur</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type d'espace disponible *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Sélectionnez votre espace</option>
                    <option>Terrasse</option>
                    <option>Balcon</option>
                    <option>Cour</option>
                    <option>Jardin</option>
                    <option>Toit</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Surface approximative (m²) *</label>
                    <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pack choisi *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Pack Premium - </option>
                      <option>Pack Starter - </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse complète *</label>
                  <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows={3}></textarea>
                </div>

                <button 
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('farmer-confirmation');
                  }}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                >
                  Soumettre ma candidature
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ConsumerSignupScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <img 
                src="https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Inscription consommateur" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
              />
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-blue-800">Créer votre compte consommateur</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse de livraison *</label>
                  <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3}></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type d'achat préféré *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Sélectionnez votre préférence</option>
                      <option>Paniers hebdomadaires</option>
                      <option>Achats ponctuels</option>
                      <option>Achats en gros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Taille du foyer</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>1-2 personnes</option>
                      <option>3-4 personnes</option>
                      <option>5+ personnes</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('consumer-confirmation');
                  }}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  Créer mon compte
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const FarmerConfirmationScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <img 
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Confirmation" 
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
            />
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-6">🎉 Merci pour votre adhésion !</h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-700">Votre candidature a été soumise avec succès.</p>
              <p className="text-lg text-gray-600">Notre équipe va examiner votre dossier et vous recontacter dans les plus brefs délais.</p>
              <p className="text-base text-gray-500">Vous recevrez un email de confirmation sous 24-48h avec les prochaines étapes.</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-green-800 mb-3">Prochaines étapes :</h3>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">✅ Validation de votre candidature</p>
                <p className="text-sm text-gray-700">✅ Visite technique de votre espace</p>
                <p className="text-sm text-gray-700">✅ Planification de l'installation</p>
                <p className="text-sm text-gray-700">✅ Formation et accompagnement</p>
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <button 
                onClick={() => navigateTo('home')}
                className="bg-green-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-green-700 transition-colors"
              >
                Retour à l'accueil
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-gray-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-gray-700 transition-colors"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ConsumerConfirmationScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <img 
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Bienvenue" 
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
            />
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-blue-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-6">🎉 Bienvenue chez GreenHouse !</h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-700">Votre compte a été créé avec succès.</p>
              <p className="text-lg text-gray-600">Vous pouvez maintenant découvrir nos paniers et commencer vos achats locaux.</p>
              <p className="text-base text-gray-500">Un email de bienvenue vous a été envoyé avec toutes les informations utiles.</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Vos avantages :</h3>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">✅ Accès à tous nos paniers personnalisés</p>
                <p className="text-sm text-gray-700">✅ Contact direct avec les agriculteurs</p>
                <p className="text-sm text-gray-700">✅ Livraison à domicile disponible</p>
                <p className="text-sm text-gray-700">✅ Produits ultra-frais garantis</p>
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <button 
                onClick={() => navigateTo('consumer-shop')}
                className="bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Voir les paniers
              </button>
              <button 
                onClick={() => navigateTo('home')}
                className="bg-gray-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-gray-700 transition-colors"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ConsumerShopScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <img 
              src="/public/WhatsApp Image 2025-07-20 at 23.42.38_0adc18d6.jpg" 
              alt="Vitrine GreenHouse" 
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            />
            <div className="flex items-center justify-center mb-4">
              <ShoppingCart className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-blue-800">Vitrine GreenHouse</h1>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Paniers disponibles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">🧺 Paniers Hebdomadaires</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="h-48 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                    <Leaf className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Panier Famille</h3>
                  <p className="text-gray-600 mb-4">Légumes variés pour 4 personnes</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">• 2kg tomates cerises</p>
                    <p className="text-sm text-gray-700">• 1kg laitue bio</p>
                    <p className="text-sm text-gray-700">• 500g herbes aromatiques</p>
                    <p className="text-sm text-gray-700">• 1kg légumes de saison</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">8,500 MRU</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Commander
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="h-48 bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                    <Package className="w-16 h-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Panier Découverte</h3>
                  <p className="text-gray-600 mb-4">Produits de saison sélectionnés</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">• 1kg légumes surprise</p>
                    <p className="text-sm text-gray-700">• 300g herbes fraîches</p>
                    <p className="text-sm text-gray-700">• 500g tomates variées</p>
                    <p className="text-sm text-gray-700">• Recettes incluses</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">6,000 MRU</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Commander
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="h-48 bg-purple-100 rounded-xl mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Panier Collectivité</h3>
                  <p className="text-gray-600 mb-4">Pour restaurants et collectivités</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">• 10kg légumes variés</p>
                    <p className="text-sm text-gray-700">• 2kg herbes aromatiques</p>
                    <p className="text-sm text-gray-700">• 5kg tomates</p>
                    <p className="text-sm text-gray-700">• Livraison gratuite</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">3,000 MRU</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Moyens de paiement */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">💳 Moyens de Paiement</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-green-600 mb-2">Carte Bancaire</h3>
                  <p className="text-sm text-gray-600">Paiement sécurisé en ligne</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Banknote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-blue-600 mb-2">Espèces</h3>
                  <p className="text-sm text-gray-600">Paiement à la livraison</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-purple-600 mb-2">Mobile Money</h3>
                  <p className="text-sm text-gray-600">Sedad, Bankily, Masrvi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ContactScreen = () => (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {contactSubmitted ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-center mb-8">
                <img 
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Message envoyé" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
                />
              </div>
              <div className="bg-white p-12 rounded-xl shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Merci de nous avoir contactés !
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais. 
                  Notre équipe vous contactera sous 24h maximum.
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    navigateTo('home');
                  }}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Retour à l'accueil
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Contactez-nous" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                />
              </div>
              <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Contactez-nous
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos coordonnées</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <p className="font-semibold text-gray-800">Téléphone</p>
                        <p className="text-gray-600">+222 XX XX XX XX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">contact@greenhouse.mr</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <p className="font-semibold text-gray-800">Adresse</p>
                        <p className="text-gray-600">Nouakchott, Mauritanie</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Horaires d'ouverture</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Lundi - Vendredi: 8h00 - 18h00</p>
                      <p>Samedi: 9h00 - 16h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
                  
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>Devenir agriculteur partenaire</option>
                        <option>Information consommateur</option>
                        <option>Support technique</option>
                        <option>Partenariat commercial</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'farmer-info':
        return <FarmerInfoScreen />;
      case 'farmer-packs':
        return <FarmerPacksScreen />;
      case 'farmer-signup':
        return <FarmerSignupScreen />;
      case 'farmer-confirmation':
        return <FarmerConfirmationScreen />;
      case 'consumer-info':
        return <ConsumerInfoScreen />;
      case 'consumer-signup':
        return <ConsumerSignupScreen />;
      case 'consumer-confirmation':
        return <ConsumerConfirmationScreen />;
      case 'consumer-shop':
        return <ConsumerShopScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return renderScreen();
}

export default App;