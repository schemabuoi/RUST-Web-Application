﻿using System;
using System.Collections.Generic;
using RUSTWebApplication.Core.Entity.Order;
using RUSTWebApplication.Core.DomainService;

namespace RUSTWebApplication.Core.ApplicationService.Services
{
	public class CountryService : ICountryService
	{
		private readonly ICountryRepository _countryRepository;


		public CountryService(ICountryRepository countryRepository)
		{
			_countryRepository = countryRepository;
		}

		public Country Create(Country newCountry)
		{
			throw new NotImplementedException();
		}

		public Country Delete(int countryId)
		{
			throw new NotImplementedException();
		}

		public Country Read(int countryId)
		{
			throw new NotImplementedException();
		}

		public List<Country> ReadAll()
		{
			throw new NotImplementedException();
		}

		public Country Update(Country updatedCountry)
		{
			throw new NotImplementedException();
		}

		List<Country> ICountryService.ReadAll()
		{
			throw new NotImplementedException();
		}
	}
}
