package space.qmen.lot.service;

import space.qmen.lot.dto.city.CityPureDTO;
import space.qmen.lot.entity.City;

import java.util.List;

public interface CityService {

    List<CityPureDTO> listCity();
    CityPureDTO getCityById(Long id);

    Long saveCity(City city);
    Long updateCity(City city);
    Long deleteCity(Long id);
}
