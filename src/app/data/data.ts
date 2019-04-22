import { Country } from './country.model';
import { Continent } from './continent.model';
import { City } from './city.model';

export const continents: Continent[] = [
  {
    id: 'sa',
    name: 'South America',
  },
  {
    id: 'na',
    name: 'North America',
  },
  {
    id: 'ai',
    name: 'Asia',
  },
];

export const countries: Country[] = [
  {
    id: 'Brazil',
    name: 'Brazil',
    continentId: 'sa',
  },
  {
    id: 'Chile',
    name: 'Chile',
    continentId: 'sa',
  },
  {
    id: 'Venezuela',
    name: 'Venezuela',
    continentId: 'sa',
  },
  {
    id: 'USA',
    name: 'USA',
    continentId: 'na',
  },
  {
    id: 'Canada',
    name: 'Canada',
    continentId: 'na',
  },
  {
    id: 'Mexico',
    name: 'Mexico',
    continentId: 'na',
  },
  {
    id: 'India',
    name: 'India',
    continentId: 'ai',
  },
  {
    id: 'N. Korea',
    name: 'N. Korea',
    continentId: 'ai',
  },
  {
    id: 'China',
    name: 'China',
    continentId: 'ai',
  },
];

export const cities: City[] = [
  {
    id: 'Macapa',
    name: 'Macapa',
    countryId: 'Brazil',
  },
  {
    id: 'Brasilia',
    name: 'Brasilia',
    countryId: 'Brazil',
  },
  {
    id: 'Manaus',
    name: 'Manaus',
    countryId: 'Brazil',
  },
  {
    id: 'Santiago',
    name: 'Santiago',
    countryId: 'Chile',
  },
  {
    id: 'Valpariso',
    name: 'Valpariso',
    countryId: 'Chile',
  },
  {
    id: 'Valdivia',
    name: 'Valdivia',
    countryId: 'Chile',
  },
  {
    id: 'Calabozo',
    name: 'Calabozo',
    countryId: 'Venezuela',
  },
  {
    id: 'Caracas',
    name: 'Caracas',
    countryId: 'Venezuela',
  },
  {
    id: 'Valencia',
    name: 'Valencia',
    countryId: 'Venezuela',
  },
  {
    id: 'Apex/Raleigh',
    name: 'Apex/Raleigh',
    countryId: 'USA',
  },
  {
    id: 'Eau Claire',
    name: 'Eau Claire',
    countryId: 'USA',
  },
  {
    id: 'Pewaukee',
    name: 'Pewaukee',
    countryId: 'USA',
  },
  {
    id: 'Toronto',
    name: 'Toronto',
    countryId: 'Canada',
  },
  {
    id: 'Thunder Bay',
    name: 'Thunder Bay',
    countryId: 'Canada',
  },
  {
    id: 'Vancouver',
    name: 'Vancouver',
    countryId: 'Canada',
  },
  {
    id: 'Cancun',
    name: 'Cancun',
    countryId: 'Mexico',
  },
  {
    id: 'Juarez',
    name: 'Juarez',
    countryId: 'Mexico',
  },
  {
    id: 'Mexico City',
    name: 'Mexico City',
    countryId: 'Mexico',
  },
];
