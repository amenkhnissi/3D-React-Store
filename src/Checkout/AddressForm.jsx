import React ,{useEffect, useState}  from 'react'
import {commerce} from '.././lib/Commerce'

const AddressForm = ({checkoutToken , next}) => {

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

    // Fetching Shipping Countries from API
  const fetchShippingCountries = async (checkoutToken) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutToken);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };
  
  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id)
  },[])

      // Fetching Subdivisions from Shipping Countries
  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

   // Fetching Shipping options
  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };
  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);
  const handleDubmit = (e) => {
    e.preventDefault();
    let data = e.target
    
    if (!data[0].value || !data[1].value ||  !data[2].value ||  !data[3].value ||  !data[4].value ||  !data[5].value ||  !data[6].value ||  !data[6].value ) {
      document.querySelector(".form-message-warning").style.display = "block"
    } else {
      let sC = document.getElementById('shippingCountry');
    let shippingCountry = sC.options[sC.selectedIndex].text;
    let sS = document.getElementById('shippingSubdivision');
    let shippingSubdivision = sS.options[sS.selectedIndex].text;
    let sO = document.getElementById('shippingOption');
    let shippingOption = sO.options[sO.selectedIndex].text;
    next({
      firstName : data['firstName'].value,
      lastName : data['lastName'].value,
      email : data['email'].value,
      address : data['address'].value,
      shippingCountry : shippingCountry,
      shippingSubdivision : shippingSubdivision,
      shippingOption : shippingOption,
      zip : data['zip'].value

    })

    }
    
  }

    return (
        <form class="row g-3 " onSubmit={(e)=> handleDubmit(e)  }>
          <div id="form-message-warning" className="py-2 form-message-warning">
                                        Form cannot be empty
                                        </div> 
  <div class="col-md-6">
    <label  class="form-label">First name</label>
    <input type="text" name='firstName' class="form-control"  required
  />
  </div>
  <div class="col-md-6">
    <label  class="form-label">Last name</label>
    <input type="text" name='lastName' class="form-control" required  />
  </div>
  <div class="col-12">
    <label  class="form-label">Email</label>
    <input type="email" name='email' class="form-control"  placeholder="email@" required />
  </div>
  <div class="col-12">
    <label  class="form-label">Address </label>
    <input type="text" name='address' class="form-control"  placeholder="Apartment, studio, or floor" required />
  </div>
  <div class="col-md-6">
    <label class="form-label">Country</label>
    <select id='shippingCountry' value={shippingCountry}  onChange={(e) => setShippingCountry(e.target.value)} class="form-select">
    {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
    </select>
  </div>
  <div class="col-md-6">
    <label class="form-label">State</label>
    <select id='shippingSubdivision' value={shippingSubdivision}  onChange={(e) => setShippingSubdivision(e.target.value)} class="form-select">
    {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
    </select>
  </div>
  <div class="col-md-6">
    <label class="form-label">Shipping options</label>
    <select id='shippingOption' value={shippingOption}  onChange={(e) => setShippingOption(e.target.value)} class="form-select">
    {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
    </select>
  </div>
  <div class="col-md-2">
    <label  class="form-label">Zip</label>
    <input type="text" name='zip' class="form-control" id="inputZip" required />
  </div>
 <div className="col-md-12 mb-4">
  <button type='submit' className="btn btn-primary"  >Next</button>
 </div>
 
</form>
    )
}

export default AddressForm
