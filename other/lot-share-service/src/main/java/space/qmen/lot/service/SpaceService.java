package space.qmen.lot.service;

import space.qmen.lot.domain.Space;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface SpaceService {

    List<Space> findAllSpace();

    Space findSpaceById(Long id);
    Long saveSpace(Space space);
    Long updateSpace(Space space);
    Long deleteSpace(Long id);
}
