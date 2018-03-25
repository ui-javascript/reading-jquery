package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.Space;
import space.qmen.lot.entity.rbac.User;

import java.util.List;

public interface SpaceDao {
    List<Space> listSpace();
    Space getSpaceById(@Param("id") Long id);
    Long deleteSpace(Long id);

    Long saveSpace(Space space);
    Long updateSpace(Space space);
}
