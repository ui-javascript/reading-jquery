package space.qmen.lot.service;


import space.qmen.lot.entity.Space;

import java.util.List;

public interface ISpaceService {
    List<Space> listSpace();
    Space getSpaceById(Long id);
    Long deleteSpace(Long id);

    Long saveSpace(Space space);
    Long updateSpace(Space space);
}
