const express = require('express');
const Resource = require('../Models/ResourceModel'); // Asegúrate de que el nombre del archivo sea correcto

exports.createResource = async (req, res) => {
    try {
        const { name, description, location } = req.body;

        const resource = new Resource({ name, description, location });
        await resource.save();
        res.status(201).json({ message: 'Recurso creado exitosamente', resource });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'El nombre del recurso ya está registrado' });
        } else {
            res.status(500).json({ error: 'Error al crear el recurso' });
        }
    }
};

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los recursos' });
    }
};

exports.getResourceById = async (req, res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findById(id);
        if (!resource) {
            return res.status(404).json({ error: 'Recurso no encontrado' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el recurso' });
    }
};

exports.updateResource = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, location } = req.body;

        const updatedResource = await Resource.findByIdAndUpdate(
            id,
            { name, description, location },
            { new: true, runValidators: true }
        );
        if (!updatedResource) {
            return res.status(404).json({ error: 'Recurso no encontrado' });
        }
        res.status(200).json({ message: 'Recurso actualizado exitosamente', updatedResource });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'El nombre del recurso ya está registrado' });
        } else {
            res.status(500).json({ error: 'Error al actualizar el recurso' });
        }
    }
};

exports.deleteResource = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedResource = await Resource.findByIdAndDelete(id);
        if (!deletedResource) {
            return res.status(404).json({ error: 'Recurso no encontrado' });
        }
        res.status(200).json({ message: 'Recurso eliminado exitosamente', deletedResource });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el recurso' });
    }
};
