package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.dto.city.CityPureDTO;
import space.qmen.lot.entity.City;

import java.util.List;

public interface CityDao {


    List<CityPureDTO> listCity();
    CityPureDTO getCityById(@Param("id") Long id);


    Long saveCity(City city);
    Long deleteCity(Long id);
    Long updateCity(City city);
}
