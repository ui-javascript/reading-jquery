package space.qmen.lot.service;

import space.qmen.lot.entity.Area;
import java.util.List;

public interface AreaService {
    List<Area> listArea();

    Area getAreaById(Long id);
    Long saveArea(Area area);
    Long updateArea(Area area);
    Long deleteArea(Long id);
}
