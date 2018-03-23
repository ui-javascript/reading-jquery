package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.Area;

import java.util.List;

public interface AreaDao {
    List<Area> listArea();
    Area getAreaById(@Param("id") Long id);


    Long saveArea(Area area);
    Long deleteArea(Long id);
    Long updateArea(Area area);
}
