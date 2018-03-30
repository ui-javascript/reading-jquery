package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.model.dto.AreaSimpleDTO;
import space.qmen.lot.model.entity.Area;

import java.util.List;

public interface AreaDao {
    List<Area> listArea();
    Area getAreaById(@Param("id") Long id);
    Long deleteArea(Long id);

    Long saveArea(AreaSimpleDTO area);
    Long updateArea(AreaSimpleDTO area);
}
