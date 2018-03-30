package space.qmen.lot.service;

import space.qmen.lot.model.dto.AreaSimpleDTO;
import space.qmen.lot.model.entity.Area;
import java.util.List;

public interface IAreaService {
    List<Area> listArea();
    Area getAreaById(Long id);
    Long deleteArea(Long id);

    Long saveArea(AreaSimpleDTO area);
    Long updateArea(AreaSimpleDTO area);
}
